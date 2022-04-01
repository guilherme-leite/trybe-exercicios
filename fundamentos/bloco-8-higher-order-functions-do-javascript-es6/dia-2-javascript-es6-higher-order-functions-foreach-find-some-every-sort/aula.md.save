Importância das HOFs
"Mas por que isso é importante?!" Você deve estar se perguntando. Além de event listeners , JavaScript possui várias outras funções desse tipo. Os arrays, em particular, possuem várias funções que facilitam sua criação e manipulação, além de deixar seu código muito mais legível e conciso.
Por exemplo: imagine que você tem um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você provavelmente escreveria algo assim, utilizando loops :
Copiar
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
Usando forEach , é assim que você faria a mesma coisa:
Copiar
const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]
Ok, as duas abordagens geram o mesmo resultado, mas qual a diferença? Vamos analisar as duas soluções e ver em que elas diferem!
Na solução usando for , você vai precisar se preocupar mais com os detalhes durante a implementação de sua lógica de execução e menos com a solução do problema que você deseja solucionar - você só quer atualizar uma propriedade de cada estudante, afinal. Você precisa:
Declarar uma variável para controlar a iteração pelo array;
Inicializar essa variável com zero, a primeira posição do array;
Controlar o ponto de parada, quando o fim do array foi alcançado ( index < students.length );
Incrementar manualmente a variável de controle do loop a cada iteração ( index += 1 );
Usar indexação de arrays pra acessar cada elemento/estudante ( students[index] );
Ufa! Tudo isso só pra atualizar o seu array!
Agora vamos olhar para a segunda solução. Tudo o que você precisa fazer é chamar a função forEach no array e passar para ela a função que você criou. E mais nada! Esse é o poder da função forEach . 😎
Ainda não está convencido? Então vamos a mais um exemplo. Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
Primeiro, usando for e if :
Copiar
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50
Agora, a mesma coisa usando Array.find :
Copiar
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50
Além de muito mais concisa, a solução usando find é muito mais fácil de entender, concorda?
Ponto de observação: note que o parâmetro passado para numbers.find(), number => number % 5 == 0 , é uma arrow function, igual no primeiro exemplo de forEach, em que foi passada a função verifyGrade .
Mas essa ideia de passar uma arrow function para uma função ainda está pouco clara, não é mesmo? E esse parâmetro que ela recebe, vem de onde?! Quem passa? Agora vamos ver, em detalhes, a estrutura de uma HOF .

Estrutura das HOFs em Arrays
As Higher Order Functions que veremos hoje são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:
Copiar
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }
Sua estrutura:
Copiar
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});
Suas partes:
arrayOfValues - Nome do array que será percorrido;
.forEach - A HOF , pode ser, .find , .some , .every ;
element - Valor do elemento do array;
(element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .
É isso mesmo! Quando você passa uma arrow function para uma HOF , o primeiro parâmetro que essa arrow function recebe é o elemento do array. Em português, é como se:
Copiar
meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});
Significasse Verifique se cada elemento do meu array é múltiplo de 2 .
Uma função como meuArray.find(elemento => elemento % 5 === 0) , por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco .
Ficou mais claro agora? A própria Higher Order Function se encarrega da lógica de pegar cada elemento do array e passar como parâmetro para a arrow function . Com for você faria isso manualmente, a proposta aqui é a HOF fazer pra você! Sua única preocupação deve ser "O que eu quero fazer com cada elemento do array?", e não "Como eu acesso cada elemento do array?".
Observe abaixo que podemos passar mais de um parâmetro para a função também. As HOFs disponibilizam para você, caso precisar, acesso a mais informações do array:
Copiar
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
A arrow function passada para o forEach possui element , index e array como parâmetros, onde:
element - Valor do elemento do array;
index - Índice em cada iteração ou posição do elemento no array, começando do 0;
array - Array original que está sendo percorrido.
Agora que já aprendeu sobre a estrutura, vamos nos aprofundar em cada uma das HOF .

Array.forEach
Como foi visto nos exemplos anteriores, o forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor .
Assista a seguir o vídeo em que o nosso querido Cairo explica como o método forEach funciona.

Agora vamos usar o forEach , para realizar a tabuada do 2. Veja o exemplo abaixo:
Copiar
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
No exemplo acima, foi executado para cada elemento do array a função multipliesFor2 , que imprime o parâmetro element * 2 no console.
Agora estamos tratando de uma HOF , sendo assim é possível se utilizar também dos demais parâmetros para se resolver um problema. Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach :
Copiar
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
Não se esqueça, também, de rodar todos os exemplos no console do seu navegador ou na sua máquina! Isso ajuda muito a fixar as coisas. Brinque e experimente com as funções!
Para fixar
1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
Copiar
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
2 - Leia e entenda este exemplo do forEach feito no CodePen.

Array.find
A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. Então, a função que deverá ser passada precisa retornar true ou false. Nesta página do MDN você pode ver com mais detalhes sobre o find . Leia até a seção Exemplos .
A animação abaixo nos mostra como o find pode ser utilizado para encontrar o primeiro item do array listaNumeros maior do que vinte. Essa condição (item > 20) é implementada na função (callback), que será executada para cada elemento de listaNumeros . Quando o primeiro item do array listaNumeros for maior que vinte, a função (callback) retornará true e o find irá retornar este elemento que satisfaz a condição passada. Observe que o retorno do método find é um único elemento: o primeiro item de listaNUmeros maior do que 20.

GIF ilustrando o método .find()
Olhe o exemplo abaixo:
Copiar
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.
Primeiro observe a função verifyEven . Ela verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
Quando a passamos como callback , o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.
Para fixar
1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
Copiar
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
}

console.log(findDivisibleBy3And5())
2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
Copiar
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
}

console.log(findNameWithFiveLetters());
3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
Copiar
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
}

console.log(findMusic('31031685'))

Array.some e Array.every
As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição. O MDN contém explicações mais detalhadas sobre essas funções, além de exemplos. Clique aqui e aqui para ler sobre essas funções. Leia até a seção Exemplos .
Para visualizar melhor o retorno dos métodos some e every , brinque com esses dois exemplos no CodePen nos links abaixo. Você pode alterar os números do array numbers para verificar o que a função está retornando para cada caso.
Array.some : link
Array.every : link
O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
Copiar
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
Copiar
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
Observe que foi usado Object.values junto com o every . Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!
Para fixar
1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
Copiar
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
}

console.log(hasName(names, 'Ana'))
2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
Copiar
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
}

console.log(verifyAges(people, 18));

Array.sort
Por último, existe a função sort . Ela permite ordenar um array de acordo com algum critério estabelecido. Veja este exemplo com um array de strings:
Copiar
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]
Funcionou bem com um array de strings, não é mesmo? Por tanto, caso queira ordenar de forma alfabética, basta chamar sort , sem parâmetros algum na função. Agora, veja este exemplo com um array de números:
Copiar
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
😮 O que aconteceu com esta ordenação?
Como pode notar, a forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre, pois ela distribui sempre por ordem alfabética . No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode!
Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:
Copiar
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
A lógica é a seguinte: a função recebe, da sort , todos os elementos do array, em pares (elemento1, elemento2) , e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */) . Ou seja: para o array [1, 2, 3, 4] , a função receberá (2, 1) , (3, 2) , (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1 . Novamente, o artigo do MDN é uma excelente fonte de informação para entender melhor.
Veja agora se realizarmos uma simples modificação no retorno da função que ordena os números e veja o que acontece:
Copiar
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
Para visualizar como o sort funciona, brinque com este exemplo feito no CodePen.
Para fixar
1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
Copiar
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

console.log(people);
2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

