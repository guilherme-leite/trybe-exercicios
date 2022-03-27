const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.number}`); 
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newName = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type
  const newTotal = order.payment.total = 60;
  console.log(drink);
  console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${newTotal},00.`);
}

orderModifier(order);

// Parte 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNewPeriod(obj, key, value) {
  obj[key] = value;
}

addNewPeriod(lesson2, 'turno', 'noite');

console.log(lesson2);

function listKeys(obj) {
  console.log(Object.keys(obj));
}

listKeys(lesson1);

function showObjSize(obj) {
  console.log(Object.entries(obj).length);
}

showObjSize(lesson2);

function showObjValues(obj) {
  console.log(Object.values(obj));
}

showObjValues(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.table(allLessons);

function allStudents(obj) {
  const lessonsArr = Object.keys(obj);
  let acc = 0;
  for(let index in lessonsArr){
    const numberOfStudents = obj[lessonsArr[index]].numeroEstudantes;
    acc += numberOfStudents;
  }
  console.log(acc);
}

allStudents(allLessons);

function getValueByNumber(lesson, num) {
  console.log(Object.values(lesson)[num]);;
}

getValueByNumber(lesson1, 0);

function verifyPair(obj, keyName, valueName) {
  obj[keyName] === valueName ? console.log(true) : console.log(false);
}

verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');

//Bonus

function totalMathStudents() {
  let acc = 0;
  for(let index in allLessons){
    if(allLessons[index].materia === 'Matemática'){
      acc += allLessons[index].numeroEstudantes
    }
  }
  console.log(acc);
}

totalMathStudents();

function createReport(obj, professor) {
  let numeroEstudantes = 0;
  const report = {
    professor: '',
    aulas: [],
    estudantes: 0,
  }

  for(let index in allLessons){
    if(allLessons[index].professor === professor){
      report.professor = professor;
      report.aulas.push(allLessons[index].materia);
      report.estudantes += allLessons[index].numeroEstudantes; 
    }
  }
  console.log(report);
}

createReport(allLessons, 'Maria Clara');

// DONE AND DONE!