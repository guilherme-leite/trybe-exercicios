class Superclass {
  constructor(public isSuper: true) { }

  public sayHello(): void {
    console.log('Hello World');
  }
}

class SubClass extends Superclass {}

const myFunc = (object: Superclass) => {
  object.sayHello();
} 

const obj1 = new Superclass(
  true,
);

const obj2 = new SubClass(
  true,
);

myFunc(obj1);
myFunc(obj2);
