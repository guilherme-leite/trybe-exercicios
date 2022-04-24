// Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// Caso contrário, rejeite a Promise com o valor do número.

function fizzBuzz(num) {
  new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      resolve(console.log('FizzBuzz'));
    } else if (num % 3 === 0) {
      resolve(console.log('Fizz'));
    } else if (num % 5 === 0) {
      resolve(console.log('Buzz'));
    } reject(console.log('O número escolhido não é divisível por 3 nem 5: ', num));
  });
}

fizzBuzz(4);