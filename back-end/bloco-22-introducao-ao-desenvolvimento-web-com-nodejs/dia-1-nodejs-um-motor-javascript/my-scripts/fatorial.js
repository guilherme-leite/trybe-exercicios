const readline = require('readline-sync');

const number = readline.question('Qual número deseja fatorar? ');

function calcFactorial() {
  let total = 1;
  for(let i = 1; i <= number; i ++) {
   total = total * i;
  }
  console.log(total);
}

calcFactorial();