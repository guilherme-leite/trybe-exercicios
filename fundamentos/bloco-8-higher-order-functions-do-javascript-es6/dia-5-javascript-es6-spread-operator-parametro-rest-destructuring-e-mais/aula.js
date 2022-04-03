const numbers = [1, 2, 3];

const newArr = [...numbers, 4,5,6];

console.log(numbers);
console.log(newArr);

//

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...spring, ...summer, ...fall, ...winter];

console.log(months);

//

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));

//

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

//

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const costumer = {
  ...people,
  ...about
};

console.table(costumer);
console.trace(costumer);

//

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Macã', 'Mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItems = ['Laranja', 'Leite condensado', 'Limão'];

const fruitSalad = (fruits, additional) => {
  const fullSalad = [
    ...fruits,
    ...additional
  ];
  return fullSalad
};

console.table(fruitSalad(specialFruit, additionalItems));

//

function quantosParams(...args) {
  console.log(`Você passou ${args.length} parâmetros para a funcão`,args);
}

quantosParams(0,1,2,3);
quantosParams(true, [1,2,3,"i"], 33);
quantosParams(true, ...[1,2,3,"i"], 33);

//

const sum = (...args) => args.reduce((acc, curr) => acc + curr);

console.log(sum(1,2,3,4,5,6,7));
console.log(sum('casa', ' da ', 'mãe'));

//

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const {name, price, seller} = product;

console.log(name);
console.log(price);
console.log(seller);

//

const character = {
  namee: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    planetName: 'Tatooine',
    population: '200000',
  },
};

const destructuredValues = {namee, age, description : {specieName, jedi}, homeWorld: {planetName, population}} = character;

console.log(`Esse é o ${namee}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const {workDays, weekend} = daysOfWeek;
console.log(workDays, weekend);

const weekdays = [...workDays, ...weekend];
console.log(weekdays);

//

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome , b: turma , c: materia } = student;
// mesma coisa que => const name = student.a;

console.log(nome);
console.log(turma);
console.log(materia);

//

const product2 = {
  productName: 'Smart TV Crystal UHD',
  productPrice: '1899.05',
  productSeller: 'Casas de Minas',
};

const printProductDetails = ({productName, productPrice, productSeller}) => {
  console.log(`Comprei uma ${productName} por ${productPrice} reais na ${productSeller}`);
};
printProductDetails(product2);

//


const user = {
  userName: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const fullInfo = {
  ...user,
  ...jobInfos,
};

console.table(fullInfo);

const onboardingPresentation = ({userName, age, nationality, profession, squad, squadInitials }) => {
  console.log(`Hi, my name is ${userName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);
};

onboardingPresentation(fullInfo);

//

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, cb] = saudacoes;
cb(ola);

//

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

//

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log('array numeros pares', numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares] = numerosPares;

console.log('array numeros pares:',numerosPares);