class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

export class CustomArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
      return this.collection[index];
  }
}

// Generic Function
function print<T>(arr: T[]): void {
    for (const item of arr) {
        console.log(item);
    }
}

print([1,2,3]);

// Generic Constraint

class House {
    print() {
        console.log('I am a house');
    }
}

class Car {
    print() {
        console.log('I am car');
    }
}

interface Printable {
    print(): void
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHouseOrCars([new House(), new House(), new Car()]);