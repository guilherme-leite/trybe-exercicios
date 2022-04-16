const readline = require('readline-sync');

const number = readline.question('Qual número deseja fatorar? ');

function calcFactorial() {
  let total = 0;
  for(let i = 2; i > number; i ++) {
    return total = number * i
  }
  console.log(total);
}

calcFactorial();