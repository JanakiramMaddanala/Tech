import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection as CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

let numbersCollection = new NumbersCollection([10, 3, -5, 0, -1]);
numbersCollection.sort();
console.log(numbersCollection.data);

let charactersCollection = new CharactersCollection("Janakiram");
charactersCollection.sort();
console.log(charactersCollection.data);

let linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(2);
linkedList.add(30);
linkedList.add(4);
linkedList.add(5);
linkedList.add(15);
linkedList.add(25);
linkedList.add(55);
linkedList.print();
linkedList.sort();
linkedList.print();
