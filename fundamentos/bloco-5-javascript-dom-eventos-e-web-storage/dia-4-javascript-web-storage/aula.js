// Exemplors de utilização do localStorage;

// console.log(localStorage.length);
// localStorage.setItem('firstname', 'Adam');
// localStorage.setItem('lastname', 'Smith');
// console.log(localStorage.getItem('lastname'));
// localStorage.removeItem('lastname');
// localStorage.clear();
// console.log(localStorage.length);

// Exemplos de utilização de sessionStorage;

// console.log(sessionStorage.length);
// sessionStorage.setItem('firstname', 'Adam');
// sessionStorage.setItem('lastname', 'Smith');
// console.log(sessionStorage);
// console.log(sessionStorage.getItem('lastname'));
// sessionStorage.removeItem('lastname');
// console.log(sessionStorage.length);
// sessionStorage.clear();
// console.log(sessionStorage.length);

// Utilização de JSON.stringify() e JSON.parse() para salvar outros formatos;

// const myObj = {
//   name: 'Link',
//   age: 20,
// }

// Transformarei para uma string como parâmentro ao utilizar o setItem;

// localStorage.setItem('myData', JSON.stringify(myObj));

// console.log(localStorage.getItem('myData'));

// Agora para recuperar os dados no seu formato original vamos utilizar JSON.parse() com o getItem como parâmetro;

// const recoveredData = JSON.parse(localStorage.getItem('myData'));

// console.log(recoveredData);

// Outro exemplo;

// const organization = {
//   name: 'trybe',
//   since: 2019,
// };

// localStorage.setItem('trybe', JSON.stringify(organization));
// let recoveredOrg = JSON.parse(localStorage.getItem('trybe'));
// console.log(recoveredOrg);

// const classes = [
//   '2019/set', '2019/oct'
// ];

// localStorage.setItem('classes', JSON.stringify(classes));
// let recoveredClasses = JSON.parse(localStorage.getItem('classes'));
// console.log(recoveredClasses);

// Exemplo 2 Script 1 Utilizando localStorage;

// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// function addPhraseToLocalStorage() {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   input.value = '';
//   localStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// function initialRenderization() {
//   if (localStorage.getItem('phrases') === null) {
//     localStorage.setItem('phrases', JSON.stringify([]));
//   } else {
//     const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = phrasesList.length - 1;
//     for (let index = 0; index <= listLength; index += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = phrasesList[index];
//       list.appendChild(listElement);
//     }
//   }
// }

// button.addEventListener('click', addPhraseToLocalStorage);

// window.onload = function() {
//   initialRenderization();
// };

// Exemplo 2 Script 2 Utilizando sessionStorage;

// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// function addPhraseToSessionStorage() {
//   if (sessionStorage.getItem('phrases') === null) {
//     sessionStorage.setItem('phrases', JSON.stringify([]));
//   }
//   const oldList = JSON.parse(sessionStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   input.value = '';
//   sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// button.addEventListener('click', addPhraseToSessionStorage);