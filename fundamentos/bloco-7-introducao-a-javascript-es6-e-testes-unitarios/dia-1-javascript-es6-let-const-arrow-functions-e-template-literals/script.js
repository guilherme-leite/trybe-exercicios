// Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortedArr = oddsAndEvens.sort((a,b) => a - b);

console.log(sortedArr); // será necessário alterar essa linha 😉

// Parte 2

//1-

function returnFactorial(num) {
  let factorial = 1;
  for(let index = 2; index <= num; index += 1) {
    factorial *= index; 
  }
  return factorial
}

console.log(returnFactorial(4));

//2-

function longestWord(word) {
  const wordArr = word.split(' ');
  let longest = '';
  for(let index = 0; index < wordArr.length - 1; index +=1){
    if(wordArr[index].length > wordArr[index + 1].length){
      longest = wordArr[index];
    } else longest = wordArr[index + 1]
  }
  return longest;
}

console.log(longestWord('nossa que guilherme'));

//OPC 2

const longestWord2 = word => {
  let wordArr = word.split(' ');
  let maxLengthWord = 0;
  let result = '';

  for(const word of wordArr) {
    if(word.length > maxLengthWord){
      maxLengthWord = word.length
      result = word;
    }
  }
  return result;
}

console.log(longestWord2('nossa que guilherme'));


// 3

let clickCount = 0;

const btn = document.querySelector('button');
const p = document.createElement('p');
document.body.appendChild(p);
p.innerText = `A contagem é: ${clickCount}`;

btn.addEventListener('click', () => {
  clickCount += 1
  p.innerText = `A contagem é: ${clickCount}`;
});

const changeX = (str1, str2) => {
  const strArr = str1.split('');
  for(let index in strArr){
    if(strArr[index] === 'x'){
      strArr[index] = str2
    };
  }
  return strArr.join('');
}

changeX('Tryber x aqui', 'Guilherme');

const skills = ['Javascript', 'html', 'css', 'jest', 'git'];

const fullPhrase = (strArr) => {
  let phrase = `${strArr}! Minhas cinco principais habilidades são:`
  for(let index in skills){
    phrase += skills[index] + ', ';
  }
  console.log(phrase);
}

fullPhrase();


