class Superclass {
  constructor(public isSuper: true) { }

  protected sayHello(): void {
    console.log('Hello World');
  }
}

class SubClass extends Superclass {
  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (object: SubClass) => {
  object.sayHello2();
} 

// const obj1 = new Superclass(
//   true,
// );

const obj2 = new SubClass(
  true,
);

// myFunc(obj1);
myFunc(obj2);
