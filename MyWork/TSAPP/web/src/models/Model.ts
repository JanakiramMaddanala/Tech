import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

type Callback = () => void;

export interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    get on() {
        return this.events.on.bind(this.events);
    }

    get get() {
        return this.attributes.get;
    }

    get trigger() {
        return this.events.trigger;
    }

    set(userProps: T) {
        this.attributes.set(userProps);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id).then((response: AxiosResponse) => {
            this.set(response.data);
        });
    }

    save(): void {
        const user = this.attributes.getAll();
        this.sync
            .save(user)
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }
}
