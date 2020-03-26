import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserShow } from './views/UserShow';
import { UserList } from './views/UserList';
import { CollectionView } from './views/CollectionView';
import { Collection } from './models/Collection';

const users = new Collection<User, UserProps>(
    'http://localhost:3000/users',
    (json: UserProps) => User.buildUser(json)
);

users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        const userList = new UserList(root, users);
        userList.render();
    }
});

users.fetch();

// const user = User.buildUser({ id: 1, name: 'Janakiram', age: 26 });
// const root = document.getElementById('root');
// if(root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
// } else {
//     throw new Error('Root element not found');
// }
