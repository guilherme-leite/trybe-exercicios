"use strict";
class Superclass {
    constructor(isSuper) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Hello World');
    }
}
class SubClass extends Superclass {
}
const myFunc = (object) => {
    object.sayHello();
};
const obj1 = new Superclass(true);
const obj2 = new SubClass(true);
myFunc(obj1);
myFunc(obj2);
