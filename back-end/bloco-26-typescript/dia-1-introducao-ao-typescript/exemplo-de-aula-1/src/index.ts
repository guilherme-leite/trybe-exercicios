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

enum studentStatus {
  Active = 1,
  Inactive,
  Paused,
}

let newStudentStatus: studentStatus = studentStatus.Active;

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const okIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// console.log(ok);
// console.log(okIndex);
// console.log(stringBadRequest);

enum DaysOfWeek {
  SUNDAY = 1,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

const today = DaysOfWeek[2];
const todaysIndex = DaysOfWeek.MONDAY;
const yesterday = DaysOfWeek[7];

console.log('weekDay', today);
console.log('weekDay', todaysIndex);
console.log('weekDay', yesterday);

enum ColorsOfTheRainbow {
  red = 1,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
}

console.log('color', ColorsOfTheRainbow[3]);

enum PrinterActions {
  salvar = 1,
  imprimir,
  abrir,
  visualizar,
  fechar
}

console.log('printerActions', PrinterActions[4]);

enum CardinalPoints {
  north = 1,
  east,
  south,
  west
}

console.log('Cardinals', CardinalPoints[2]);
