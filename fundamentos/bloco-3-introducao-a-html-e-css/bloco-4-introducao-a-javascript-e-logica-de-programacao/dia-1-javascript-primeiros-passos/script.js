const a = 10;
const b = 5;
const c = 3;
const d = Math.floor(Math.random()*11);

console.log('Soma: '+(a+b));
console.log('Subtração: ' + (a-b));
console.log('Multiplicação: ' + (a*b))
console.log('Divisão: ' +(a/b))
console.log('Modulo: ' + (a%b))

if (a > b) {
  console.log('O maior valor é a')
} else {
  console.log('O maior valor é b')
}

if (a > b && a > c) {
  console.log('O maior número é o a')
} else if (b > a && b > c) {
  console.log('O maior ńumero é o b')
} else if (c > a && c > b) {
  console.log('O maior número é o c')
} else {console.log('Mais de um dos números é igual')}

if (d % 2 === 0 && d ==! 0) {
  console.log(`O valor de d é ${d} e ele é um ńumero positivo`);
} else {
  console.log(`O valor de d é ${d} e ele é um ńumero negativo ou zero`);
}

let ar1 = Math.floor(Math.random()*90);
let ar2 = Math.floor(Math.random()*90);
let ar3 = Math.floor(Math.random()*90);


console.log(ar1)
console.log(ar2)
console.log(ar3)

if (ar1+ar2+ar3 > 180) {
  console.log('é um triângulo')
} else {console.log('não é um triângulo')}

arr = ['pawn', 'bishop', 'knight', 'rook', 'queen', 'king']
peca = arr[Math.floor(Math.random()*6)]

switch (peca){
  case 'pawn':
  console.log('Pawns can only move forward');
  break;

  case 'bishop':
  console.log('Bishops can move any number of squares diagonally.');
  break;

  case 'knight':
  console.log('Knights can move only in an L-shape');
  break;

  case 'rook':
  console.log('Rooks can move any number of squares, up and down and side to side.');
  break;

  case 'queen':
  console.log('Queens can move any number of squares along ranks, files and diagonals.');
  break;

  case 'king':
  console.log('Kings can move one square at a time in any direction.');
  break;

  default: console.log(`não deu certo, o valor de peça foi: ${peca}`);
}


// let notaPorcentagem = Math.floor(Math.random()*101);
// console.log(notaPorcentagem)

// switch (notaPorcentagem) {
//   case notaPorcentagem >= 90:
//     console.log('maior que 90')
//     break;
//   case notaPorcentagem <= 90:
//     console.log('menor que 90')
//     break;
//   default:
//     console.log('deu ruim')
// }


let num1 = 1;
let num2 = 4;
let num3 = 17;

for (i=1; i<3; i++){
  if (num[i] % 2 === 0)
  return true;
  else {
    return false;
  }
}