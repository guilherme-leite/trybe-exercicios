const myFizzBuzz = require('./myFizzBuzz');

describe('Teste o retorno da funcao myFizzBuzz', () => {
test('Se a funcao for chamada com numeros divisíveis por 3 e 5 o retorno é o esperado?', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test("Se a funcão for chamda com um número divisível por 3 o retorno é o esperado?", () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

test("Se a funcão for chamda com um número divisível por 5 o retorno é o esperado?", () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

test('Se a funcao for chamada com um número não divisível por 3 e 5 o retorno é o esperado?', () => {
  expect(myFizzBuzz(4)).toBe(4);
});

test('Se a funcão for chamada com um parâmetro que não é um número o retorno é o esperado?', () => {
  expect(myFizzBuzz('3')).toEqual(false);
});
});

