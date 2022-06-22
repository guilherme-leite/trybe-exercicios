"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello World!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
const myFunc = (object) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
};
const sup = new Superclass();
const sub = new Subclass();
myFunc(sup);
myFunc(sub);
