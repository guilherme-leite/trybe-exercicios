Throw e Try/Catch

Para começar, relembre o conteúdo da aula anterior com este exemplo de arrow function :
Copiar
const sum = (value1, value2) => value1 + value2;
A função acima é bastante simples: recebe dois parâmetros e retorna a soma entre eles. Copie o código e chame a função com dois parâmetros numéricos (por exemplo, 2 e 3). Não esqueça do console.log para que seja possível ver o retorno.
Copiar
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, 3));
Tudo funciona perfeitamente quando você tem o controle do código, certo? Mas digamos que você está desenvolvendo uma aplicação onde uma pessoa irá fornecer os valores. Sabemos que pessoas cometem erros e podem, por exemplo, tentar somar o número 2 com a string '3'. O que aconteceria nesse caso?
Copiar
const sum = (value1, value2) => value1 + value2;

console.log(sum(2, '3')); // resultado: 23
2 + '3' = 23?? Uma interação bastante inusitada, concorda? O que aconteceu foi que a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos, tentou adaptá-los para que o código não quebrasse - no caso, o primeiro parâmetro foi convertido para uma string , e a operação realizada foi uma concatenação de strings através do sinal de + .
Esse comportamento ocorre porque considera-se o JavaScript como uma linguagem dinâmica . Ou seja, quando se declara uma variável, não é necessário atrelar ela a nenhum tipo, o que permite inclusive que ela mude de tipo ao longo da execução do código.
Por mais que esse aspecto traga alguma flexibilidade, ele também produz comportamentos inesperados que podem ser difíceis de identificar. Por isso, você enquanto boa pessoa programadora deve ser capaz de prever esses comportamentos e evitar que eles ocorram. 😉
Vamos adicionar uma condicional que impede a pessoa usuária de quebrar a sua calculadora.
Copiar
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3'));
Pronto, agora o seu código avisa para a pessoa usuária que a função sum só aceita números. Aparentemente está tudo funcionando como deveria, mas essa ainda não é a melhor forma de se tratar um erro em JavaScript . Na prática, a função sum está retornando uma string, e essa não é o objetivo de uma função que soma dois números, certo? Você precisa indicar de alguma forma que ocorreu um erro.
Para isso existe o fluxo de exceção: quando um erro acontece em Javascript, devemos lançar uma exceção, que vai interromper o funcionamento do código. Essa é a função do throw :
Copiar
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));
Percebeu a diferença? Agora a execução da função sum foi interrompida e temos uma mensagem de erro no console, bem como uma indicação da linha onde esse erro ocorre.

Exemplo de erro lançado com throw.
Mas vamos detalhar por partes o que foi feito:
A palavra reservada throw serve para lançar uma exceção criada por você. No caso, definimos que não seria aceito um parâmetro que não fosse do tipo number , então criamos esse "erro customizado". Caso contrário, a função sum apresentaria um comportamento incorreto. Se quiser saber mais detalhes, consulte a documentação .
O operador new serve para criar um objeto personalizado ou nativo do JavaScript . Mais sobre o new aqui .
A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new , você cria uma cópia deste objeto, que será lançada como uma exceção no seu código. Veja mais sobre Error na documentação oficial .
Você programou o código para lançar uma exceção caso aconteceça um erro, mas o fluxo do código ainda pode ser melhorado. Você precisa, por exemplo, capturar esse erro para melhor tratá-lo. É aí que entra o bloco try/catch . Enquanto o try tenta executar o código com sucesso, o catch é chamado caso ocorra um erro.
Aproveitando a ocasião, seria uma ótima ideia refatorar a função sum para que ela não tenha funcionalidades demais.
Copiar
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum(2, '3'));
Agora sim! Você criou um fluxo para quando nosso código é executado com sucesso, representado pelo bloco try , que tenta fazer a soma de dois valores. Esse bloco chama a função recém-criada verifyIsNumber , que verifica se os parâmetros passados são números. Quando se depara com um valor que não é um número, o código lança um erro com o throw , que é capturado pelo catch no fluxo de exceção, através da variável error (aqui podemos usar qualquer nome). Dentro do catch retornamos a chave error.message , uma propriedade do objeto nativo Error que contém a mensagem de erro criada anteriormente.
Como sempre, dê uma olhada na documentação oficial para aprofundar seus conhecimentos.

Objetos: Parte I - Adicionando novas chaves (keys)
Para começar, veja o exemplo abaixo de um objeto que contém as informações de um cliente de uma loja:
Copiar
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName .
Copiar
const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};
Existem também outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades. Veja o exemplo abaixo:
Copiar
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);
No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:
objeto.nomeDaPropriedade .
objeto[variavelQueContemONomeDaPropriedade] .
Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.
Copiar
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

Objetos: Parte II - Object.keys
Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
Com o que você aprendeu até o momento de objetos, você poderia utilizar a estrutura de repetição for...in . Por exemplo:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property);
}

// name
// genre
// author
// favoriteCharacter
// quote
// seasons
Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores? O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array. Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Fantástico não é mesmo? Vamos ver como ficaria nosso exemplo utilizando este método:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]
Agora que você já sabe o que é o Object.keys , que tal dar uma olhadinha na sua documentação ? Leia até a seção sobre Polyfill.
Após a leitura, veja mais um exemplo de aplicação do Object.keys . Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.
Copiar
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.
Copiar
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
Verifique que usamos o método Object.keys e a estrutura de repetição for...in em conjunto. Além disso, perceba que a mesma função é utilizada para iterar sobre os dois objetos, mesmo o segundo tendo uma chave a mais que o outro.

Objetos: Parte III - Object.values
O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave. Voltando ao nosso exemplo anterior, como faríamos para listar os valores de cada chave do nosso objeto coolestTvShow ? Utilizando o for...in seria algo como:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(coolestTvShow[property]);
}

// BoJack Horseman
// adult animation
// Raphael Bob-Waksberg
// Princess Carolyn
// Princess Carolyn always lands on her feet.
// 6
Podemos então refatorar para utilizar o Object.values , nosso código ficaria assim:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(coolestTvShow[property]);
// }

console.log(Object.values(coolestTvShow));

// [
//   'BoJack Horseman',
//   'adult animation',
//   'Raphael Bob-Waksberg',
//   'Princess Carolyn',
//   'Princess Carolyn always lands on her feet.'
//    6
// ]
Vamos dar uma olhadinha na documentação para entender melhor seu funcionamento.
Para fixar melhor veja abaixo mais um exemplo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores. Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values .
Copiar
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
Observe como a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.

Objetos: Parte IV - Object.entries
Outro método muito útil para se trabalhar com objetos é o Object.entries . Um pouco diferente dos métodos apresentados anteriormente, este retorna um array cujos elementos são também arrays para cada conjunto chave e valor do objeto. Ficou confuso? Não se preocupe, vamos ao nosso exemplo e ver qual seria a saída:
Copiar
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]
Como você pode perceber, ao aplicar o Object.entries no nosso objeto, o retorno foi um array de arrays. Onde a primeira entrada de cada array é a chave do objeto em formato de string , e, o segundo valor é seu respectivo valor, que pode ser uma string ou outro tipo de dado, como por exemplo o número de temporadas do exemplo que é um number . Bem legal, não é mesmo? Vamos então agora ler a documentação até a seção "Convertendo um Object em um Map".
Após a leitura que tal analisarmos mais um exemplo? Então bora lá:
Copiar
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
Observe que o retorno dele é um array e que cada um de seus elementos é um outro array com apenas dois dados, a chave do objeto e o seu valor. Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.
Copiar
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

Objetos: Parte V - Object.assign
Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:
Copiar
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
Como você pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.
Veja o exemplo abaixo:
Copiar
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
Como você pode ver, o método Object.assign adicionou as propriedades de info e de family ao objeto person . Observe também que a chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info . Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará o último valor disponível.
Agora, observe o exemplo abaixo.
Copiar
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }
Como pôde ver acima, o clone é exatamente igual ao objeto person , e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades.
Que tal fazer um teste para confirmar isso?
Copiar
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável para armazenar o retorno do método Object.assign , cria-se apenas um outro "caminho" para modificar ou acessar os dados do objeto destino (nesse caso, person ). No exemplo abaixo, é apresentada outra forma de se copiar um objeto.
Copiar
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
Se você modificar o cloneObj , verá que novamente teremos o mesmo resultado anterior, de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?
Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo.
Copiar

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
Agora, apenas o objeto newPerson será modificado.
