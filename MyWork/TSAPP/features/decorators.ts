@classDecorator
class Boat {
  @property
  color: string = "red";

  @accessor
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Oops, Boat was sunk on the road")
  pilot(@parameter speed: string, @parameter height: number): void {
    throw Error();
    console.log("swish");
  }
}

function parameter(target: any, key: string, index: number) {
    console.log(key, index);
}

function property(target: any, key: string) {
    console.log(target, key);
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}

function accessor(target: any, key: string, desc: PropertyDescriptor) {
    desc.set = function(value: string) {
        console.log(value);
    }
}

function classDecorator(constructor: any) {
    console.log(constructor);
}


