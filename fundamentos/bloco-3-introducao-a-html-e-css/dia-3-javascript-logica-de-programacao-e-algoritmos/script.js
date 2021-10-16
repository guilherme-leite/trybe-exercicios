// // Exercício 
// let n = Math.ceil(Math.random()*4+1);
// let symbol = '*';
// let linha1 = '';

// console.log(n);
// console.log();

// for (let index = 0; index < n; index++){
//   linha1 += symbol;
// }
// for (let index = 0; index < n; index++){
//   console.log(linha1);
// }let symbol = '*';
// let linha1 = '';

// console.log()
// console.log('Exercício 2 *************************************************************');
// console.log()

// let q = Math.ceil(Math.random()*9-1);
// let linha2 = '';

// console.log(q);
// console.log()

// for (let index = 0; index < q; index++){
//   linha2 += symbol;
//   console.log(linha2);
// }

// console.log()
// console.log('Exercício 3 *************************************************************');
// console.log()

// var n = Math.ceil(Math.random()*10+1);

// console.log(n);
// console.log();

// for (let index = 1; index <= n; index++){
  
//   let linha = '';
//   let symbol = '*';
//   let space = ' ';
  
//   for (let q = index; q < n; q++){
//     linha += space;
//   }
//   for (let u = 0; u < index; u++){
//     linha += symbol;
//   }
  
//   console.log(linha);
// }

// console.log()
// console.log('Exercício 4 *************************************************************');
// console.log()

// var n = Math.ceil(Math.random()*10+1);

// console.log(n);
// console.log();

// for (let index = 1; index <= n; index++){
  
//   let linha = '';
//   let symbol = ' *';
//   let space = ' ';
  
//   for (let q = index; q < n; q++){
//     linha += space;
//   }
//   for (let u = 0; u < index; u++){
//     linha += symbol;
//   }
  
//   console.log(linha);
// }

// console.log()
// console.log('Exercício 5 *************************************************************');
// console.log()

// var n = Math.ceil(Math.random()*10+1);

// console.log(n);
// console.log();

for (let index = 1; index <= n; index++){
  
  let linha = '';
  let symbol = ' *';
  let space = ' ';
  
  for (let q = index; q < n; q++){
    linha += space;
  }
  for (let u = 0; u < index; u++){
    linha += symbol;
  }
  
  console.log(linha);
}