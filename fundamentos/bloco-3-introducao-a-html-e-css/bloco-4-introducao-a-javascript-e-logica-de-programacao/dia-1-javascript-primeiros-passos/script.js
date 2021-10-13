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

