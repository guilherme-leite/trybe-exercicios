const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
 return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten());

//

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const allAuthors = books.map((book) => book.author.name);
  console.log(allAuthors);
  const reduceAllNames = allAuthors.reduce((acc, curr) => acc + curr);
  console.log(`"${reduceAllNames}."`);
}

console.log(reduceNames());

// 

//expected = 43

function averageAge() {
  const getAllAges = books.map((book) => book.releaseYear - book.author.birthYear);
  const sumAllAges = getAllAges.reduce((acc, curr) => acc + curr);
  const average = sumAllAges / getAllAges.length;
  console.log(average);
}

averageAge();

//


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  const getBookNames = books.map((book) => book.name);
  console.log("getBookNames", getBookNames);
  const getBiggestBookName = getBookNames.reduce((acc, curr) => acc.length > curr.length ? acc : curr);
  const result = books.find((book) => book.name === getBiggestBookName);
  console.log(result);
}

longestNamedBook();

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const string = names.reduce((acc, curr) => acc.concat(curr)).toLowerCase().split('').filter((ele) => ele === 'a').length;
  console.log(string);
}

containsA();

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const studentAverage = students.map((student, index) => ({
    name: students[index],
    average: grades[index].reduce((acc, curr) => (acc + curr))/grades[index].length,
  }));
   console.table(studentAverage);
}

studentAverage();

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];