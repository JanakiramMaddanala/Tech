import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    color: string;
    name: string;
    location: {
        latitude: number;
        longitude: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            longitude: parseFloat(faker.address.longitude()),
            latitude: parseFloat(faker.address.latitude()),
        }
        this.color = 'red';
    }

    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}