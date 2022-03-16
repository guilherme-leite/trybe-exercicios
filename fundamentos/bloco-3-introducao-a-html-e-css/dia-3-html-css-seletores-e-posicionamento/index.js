let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

function greeter(key) {
  return 'Olá ' + info[key]
}

console.log(greeter('personagem'));

function isReocurring(key) {
  console.log(info[key]);
}

isReocurring('recorrente');

function returnAllKeys() {
  for (let key in info) {
    console.log(key);
  }
}

returnAllKeys();

function returnAllValues() {
  for (let values in info) {
    console.log(info[values]);
  }
}

returnAllValues();

let info2 = {
  personagem: 'Tio Patinhas', 
  origem: 'Christmas on Bear Mountain Dells Four Color Comics #178', 
  nota:'O último MacPatinhas', 
  recorrente: 'Sim',
};

function returnAllValuesFromBothObjects() {
  console.log(info['personagem'] + ' e ' + info2['personagem']);
  console.log(info['origem'] + ' e ' + info2['origem']);
  if (info['recorrente'] && info2['recorrente'] === 'Sim') {
    console.log('Ambos recorrentes');
  }

}

returnAllValuesFromBothObjects();

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
  ],
};

function phrase() {
  console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + '"' + leitor['livrosFavoritos'][0]['titulo'] + '"');
}

phrase();

function favoriteBookCount() {
  console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos');
}

favoriteBookCount();

function isPallindrome(str) {
  let strArr = str.split('');
  console.log(strArr);
  let reverse = strArr.reverse().join('');
  console.log(reverse);
  if(str === reverse) {
    return true;
  } return false;
  
};

console.log(isPallindrome('arara'));
console.log(isPallindrome('paralelepipedo'));

function highestValueIndex(arr) {
  let highest = 0;
  for (let index in arr) {
    if (arr[highest] < arr[index]) {
      highest = index;
    }
  }
  return highest;
}
console.log(highestValueIndex([2, 3, 6, 7, 10, 1]));

function lowestValueIndex(arr) {
  let lowest = 0;
  for (let index in arr) {
    if (arr[lowest] > arr[index]) {
      lowest = index;
    }  
  }
  return lowest;
}

console.log(lowestValueIndex([2, 4, 6, 7, 10, 0, -3]));

function returnHighestLenghtString(arr) {
  let highest = 0;
  for (let index in arr) {
    if (arr[highest].length < arr[index].length){
      highest = index;
    }
  }
  return arr[highest];
}

console.log(returnHighestLenghtString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function returnHighestLenghtString(arr) {
  let highest = 0;
  for (let index in arr) {
    if (arr[highest].length < arr[index].length){
      highest = index;
    }
  }
  return arr[highest];
}

console.log(returnHighestLenghtString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function returnMostOccuringNum(arr) {
  let occurences = 0;
  for (let index in arr) {
    if (arr[occurences] === arr[index]) {
      occurences + 1;
    }
  }
  return arr[occurences];
}

console.log(returnMostOccuringNum([2, 3, 2, 5, 8, 2, 3]));

function returnFactorial(num) {
  let sum = 0;
  for (let index = 0; index <= num; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(returnFactorial(5));

function checksWordEnd(strWord, strEnd) {
  let startArr = strWord.split('');
  let endArr = strEnd.split('');
  for (let index = 0; index < endArr.length; index += 1){
    if (endArr[index] !== startArr[index + strEnd.length + 1]){
      return false;
    }
  }
  return true;
}

console.log(checksWordEnd('trybe', 'ba'));
