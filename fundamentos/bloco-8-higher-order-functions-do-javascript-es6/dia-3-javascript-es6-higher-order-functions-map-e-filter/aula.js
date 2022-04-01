const numbers = [19, 21, 30, 3, 45, 22, 15];

function isEven() {
  const newArr = numbers.filter((number) => number % 2 === 0);
  console.log(newArr);
}

isEven();

//

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyDrivingAge = () => {
  console.log(objPeople.filter((person) => person.age >= 18));;
}
 verifyDrivingAge()

 //

 const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, arr) => arr.filter((person)=> person !== name);

console.log(removeStudentByName('Ricardo', arrayMyStudents));;

//
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// Exemplo com FOR

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

const mapFullNames = (persons) => persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(mapFullNames(persons));

//

const numbers2 = [1, 2, 3, 4, -5];

const negativeArr = (arr) => arr.map((number) => number < 0 ? number : number * -1);

console.log(negativeArr(numbers2));

//

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// retorno esperado const listProducts = [{ Arroz: 2.99 },...]

const productsAndPricesArr = (ar1, ar2) => ar1.map((product, index) => ({ [product]: ar2[index]}));

console.log(productsAndPricesArr(products, prices));

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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];
// Solucão utilizando forEach
// const morningPeriodStudents = () => estudantes.forEach((estudante) => {
//   if(estudante.turno === 'Manhã'){
//    console.log(`${estudante.nome} ${estudante.sobrenome}`);
//   }
// });

// Solucão usando filter e map

const morningPeriodStudents = () => estudantes.filter((estudante) => estudante.turno === "Manhã").map((estudante) => console.log(`${estudante.nome} ${estudante.sobrenome}`));

// 

morningPeriodStudents();

//

const findStudentByName = (name) => {
  const chosenStudent = estudantes.find((estudante) => estudante.nome === name);
  return studentSituation = chosenStudent.materias.map((materia) => materia.nota > 80 ? `${materia.name}: Aprovado.` : `${materia.name}: Reprovado.` );
};

console.log(findStudentByName("Wilson"));

