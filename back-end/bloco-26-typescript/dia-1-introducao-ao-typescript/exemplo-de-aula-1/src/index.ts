let nome: string = 'Gui';
let idade: number = 10;
let isTryber: boolean = true;

let stringOrNumber: string | number = 'gui'
stringOrNumber = 'Guigo';

let anyValue: any = 10;
anyValue = 'GUigo';
anyValue = true;
anyValue = undefined;

let x: number;

let y: number = 0;
let z: number = 123.456;

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string