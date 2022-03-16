// Parte I - Objetos e For/In

// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// Bem-vinda, Margarida

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// personagem
// origem
// nota
// recorrente

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!
// Usando o objeto abaixo, faça os exercícios a seguir:

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// function greeter(key) {
//   return 'Olá ' + info[key]
// }

// console.log(greeter('personagem'));

// function isReocurring(key) {
//   console.log(info[key]);
// }

// isReocurring('recorrente');

// function returnAllKeys() {
//   for (let key in info) {
//     console.log(key);
//   }
// }

// returnAllKeys();

// function returnAllValues() {
//   for (let values in info) {
//     console.log(info[values]);
//   }
// }

// returnAllValues();

// let info2 = {
//   personagem: 'Tio Patinhas', 
//   origem: 'Christmas on Bear Mountain Dells Four Color Comics #178', 
//   nota:'O último MacPatinhas', 
//   recorrente: 'Sim',
// };

// function returnAllValuesFromBothObjects() {
//   console.log(info['personagem'] + ' e ' + info2['personagem']);
//   console.log(info['origem'] + ' e ' + info2['origem']);
//   if (info['recorrente'] && info2['recorrente'] === 'Sim') {
//     console.log('Ambos recorrentes');
//   }

// }

// function romanNumCalculator(num) {
//   const romanNums = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,  
//   }
//   let total = 0;
//   let numeral = num.split('');
//   for (let i = 0; i < numeral.length; i++){
//     if(numeral[i] > numeral[i+1] || numeral[i] === numeral[i+1]){
//       total = romanNums[numeral[i]] + romanNums[numeral[i+1]];
//       console.log(total);
//     } else {
//       total = romanNums[numeral[i+1]] - romanNums[numeral[i]];
//       console.log(total);
//     }
//   }
//   return total;
// }

// console.log(romanNumCalculator('ii'));

// returnAllValuesFromBothObjects();

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//     {
//       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//       autor: 'JK Rowling',
//       editora: 'Rocco',
//     },
//   ],
// };

// function phrase() {
//   console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"');
// }

// phrase();

// function favoriteBookCount() {
//   console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');
// }

// favoriteBookCount();

// function isPallindrome(str) {
//   let strArr = str.split('');
//   console.log(strArr);
//   let reverse = strArr.reverse().join('');
//   console.log(reverse);
//   if(str === reverse) {
//     return true;
//   } return false;
  
// };

// console.log(isPallindrome('arara'));
// console.log(isPallindrome('paralelepipedo'));

// function highestValueIndex(arr) {
//   let highest = 0;
//   for (let index in arr) {
//     if (arr[highest] < arr[index]) {
//       highest = index;
//     }
//   }
//   return highest;
// }
// console.log(highestValueIndex([2, 3, 6, 7, 10, 1]));

// function lowestValueIndex(arr) {
//   let lowest = 0;
//   for (let index in arr) {
//     if (arr[lowest] > arr[index]) {
//       lowest = index;
//     }  
//   }
//   return lowest;
// }

// console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));

// function returnHighestLenghtString(arr) {
//   let highest = 0;
//   for (let index in arr) {
//     if (arr[highest].length < arr[index].length){
//       highest = index;
//     }
//   }
//   return arr[highest];
// }

// console.log(returnHighestLenghtString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function returnHighestLenghtString(arr) {
//   let highest = 0;
//   for (let index in arr) {
//     if (arr[highest].length < arr[index].length){
//       highest = index;
//     }
//   }
//   return arr[highest];
// }

// console.log(returnHighestLenghtString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function returnMostOccuringNum(arr) {
//   let occurences = 0;
//   for (let index in arr) {
//     if (arr[occurences] === arr[index]) {
//       occurences + 1;
//     }
//   }
//   return arr[occurences];
// }

// console.log(returnMostOccuringNum([2, 3, 2, 5, 8, 2, 3]));

// function returnFactorial(num) {
//   let sum = 0;
//   for (let index = 0; index <= num; index += 1) {
//     sum += index;
//   }
//   return sum;
// }

// console.log(returnFactorial(5));

// function checksWordEnd(strWord, strEnd) {
//   let startArr = strWord.split('');
//   let endArr = strEnd.split('');
//   for (let index = 0; index < endArr.length; index += 1){
//     if (endArr[index] !== startArr[index + strEnd.length + 1]){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checksWordEnd('trybe', 'ba'));

function romanNumCalculator(num) {
  const romanNums = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,  
  }
  let total = 0;
  let numeral = num.split('');
  for (let i = 0; i < numeral.length; i++){
    if(numeral[i] > numeral[i+1] || numeral[i] === numeral[i+1]){
      return total = romanNums[numeral[i]] + romanNums[numeral[i+1]];
    } else {
      return total = romanNums[numeral[i+1]] - romanNums[numeral[i]];
    }
  }
  return total;
}

console.log(romanNumCalculator('xl'));