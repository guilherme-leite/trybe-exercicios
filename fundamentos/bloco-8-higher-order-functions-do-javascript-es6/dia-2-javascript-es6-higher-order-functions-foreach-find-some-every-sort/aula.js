const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];


const showEmailList = (list) => {
  const div = document.querySelector('#email-list');
  div.innerHTML = '';
  list.forEach((email) => {
    const p = document.createElement("p");
    p.innerHTML = `${email}`;
    div.appendChild(p);
  });
}

const btn = document.querySelector("#btn-filter");
btn.addEventListener('click', () => showEmailList(emailListInData));

// 1

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyDivisibilityBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const verify = numbers.find(verifyDivisibilityBy3And5);

console.log(verify);

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5);

// 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length >= 5);

console.log(findNameWithFiveLetters);

// 3

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => musicas.find((musica) => musica.id === id);

console.log(findMusic('31031685'))

// Array.some e Array.every

// 1

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name2) => arr.some((name) => name === name2);

console.log(hasName(names, 'Ana'));

// 2

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18));

// Array.sort

// 1

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sortPeopleCresc = () => people2.sort((personA, personB) => personA.age - personB.age);

console.table(sortPeopleCresc());

// 2

const sortPeopleDec = () => people2.sort((personA, personB) => personB.age - personA.age);

console.table(sortPeopleDec());

