
function emailGenerator(name) {
  const email = name.toLowerCase().split(' ').join("_");
  return {
    name,
    email: `${email}@trybe.com`
  }
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"),
    id2: callback("Luiza Drumond"),
    id3: callback("Carla Paiva"),
  }
  return employees;
};

console.log(newEmployees(emailGenerator));''

//

function numChecker(randomNum,chosenNum) {
   return randomNum === chosenNum
};

function lotteryGame(chosenNum, callback) {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  console.log(randomNum);
  return callback(randomNum, chosenNum) ? "Parabéns você venceu" : "Tente novamente";
};

console.log(lotteryGame(3, numChecker));

//

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkAnswers(rightAnswer, studentAnswer) {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const compareAnswers = (rightAnswer, studentAnswer, callback) => {
  let grade = 0;
  for (let index = 0; index < rightAnswer.length; index += 1){
    const point = callback(rightAnswer[index], studentAnswer[index]);
    grade += point;
  };
  return `Resultado: ${grade}`;
};

console.log(compareAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

//

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function dragonDamage({strength}) {
  console.log(Math.floor(Math.random() * (strength - 14)+ 15));
}

dragonDamage(dragon);