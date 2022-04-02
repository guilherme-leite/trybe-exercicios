const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number);

console.log(sumNumbers);

//

// const collection = [1,2,3,4,5];

// const getSum = (acc, num) => acc + num;
// const sumNums = collection.reduce(getSum);
// console.log(sumNums);

//

const collection = [1,2,3,4,5];
const getSum = (acc, num) => acc + num;
// passando segundo parametro para o reduce, comeca a contagem em 10;
const sumNums = collection.reduce(getSum, 10);
console.log(sumNums);

//

const numbersArr = [50, 85, -30, 3, 15];
const highest = (acc, num) => num > acc ? acc : num;
const findHighest = numbersArr.reduce(highest, 0);
console.log(findHighest);

//

const numbersArr2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = (acc, num) => num % 2 === 0 ? acc + num : acc;
const getSumEvens = numbersArr2.reduce(sumEvens, 0);
console.log(getSumEvens);

// Com Filter e Reducer

const allEvens = (number) => number % 2 === 0;
const sumPairs = (acc, curr) => acc + curr;
const sumAll = (arr) => arr.filter(allEvens).reduce(sumPairs);
console.log(sumAll(numbersArr2));

//

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const findBestGrade = (acc, curr) => acc.nota > curr.nota ? acc : curr;

const findBestGradesByStudent = () => estudantes.map((estudante) => ({
  nome: estudante.nome,
  materia: estudante.materias.reduce(findBestGrade).name,
}));

console.log(findBestGradesByStudent());