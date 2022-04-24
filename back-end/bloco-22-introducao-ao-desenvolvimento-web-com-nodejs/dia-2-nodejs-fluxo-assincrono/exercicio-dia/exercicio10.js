// Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// Caso contrário, rejeite a Promise com o valor do número.

function fizzBuzz(num) {
  return new Promise((resolve, reject) => {
    if (num % 3 === 0 && num % 5 === 0) {
      resolve('FizzBuzz');
    } else if (num % 3 === 0) {
      resolve('Fizz');
    } else if (num % 5 === 0) {
      resolve('Buzz');
    } reject(num);
  });
}

fizzBuzz(1).catch(console.error); 
fizzBuzz(3).then(console.log); 
fizzBuzz(5).then(console.log); 
fizzBuzz(15).then(console.log);