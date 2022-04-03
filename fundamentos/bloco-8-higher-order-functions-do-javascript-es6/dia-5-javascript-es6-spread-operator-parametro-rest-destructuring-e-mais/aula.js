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

