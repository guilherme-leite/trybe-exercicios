Escrevendo testes
Escrever testes em Jest é muito simples, como você deve ter percebido enquanto lia o artigo anterior. Tudo que é necessário é utilizar a função test . A função it é um alias para test , ou seja, ambas se referem à mesma função e você pode usar qualquer uma delas. Essas funções, por serem globais, ficam automaticamente disponíveis nos seus arquivos uma vez que o Jest é instalado.
A função test espera três argumentos. O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. O segundo argumento é uma função contendo suas expectations . Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. O terceiro argumento (opcional) é um timeout , indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.
Para entender melhor, veja o código abaixo:
Copiar
// sum.js
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. Na prática, porém, eles ficarão separados. Jest procura por arquivos com as extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , ou arquivos com o sufixo .test ou .spec . É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js :
Copiar
// sum.js
const sum = (a, b) => a + b;

module.exports = sum;
Copiar
// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});
A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum . Veja a seção de recursos adicionais para entender mais sobre como importar e exportar módulos em Node.js .
Agora que você já viu um teste simples de jest em funcionamento, que tal praticar com mais este próximo exemplo? Não se preocupe em entender como os testes estão estruturados neste exemplo. O objetivo aqui é apenas mostrar o quanto trabalhar com a biblioteca Jest é mais simples.
Crie um arquivo com o nome 'loginValidation.js' e dentro dele copie e cole o seguinte código:
Copiar
// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

const user = {
  userName: "Joana",
  password: 123456,
};

const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === "Joana") {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }
Vamos primeiro entender as funções que estão implementadas no arquivo loginValidation.js. Neste arquivo encontram-se três funções para simular uma situação de login. A função verifyCredentials faz uma validação simples se a pessoa usuária e a senha recebidas como argumento são estritamente iguais as chaves userName e password contidas no objeto user . Se essa verificação retornar true a função verifyCredentials vai chamar a função greetingMessage , que por sua vez vai retornar uma frase de boas vindas com o nome da pessoa usuária. Já no caso da verificação retornar false , ou seja as credenciais inseridas não corresponderem com as existentes no objeto, a função verifyCredentials vai chamar a função loginErrorMessage , que irá por sua vez retornar um erro.
Agora, crie outro arquivo no mesmo diretório com o nome 'loginValidation.test.js' e dentro dele copie e cole o código abaixo:
Copiar
// loginValidation.test.js
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("./loginValidation.js");

describe("a função verifyCredentials()", () => {
  
  it("verifyCredentials() calls the correct function depending on the user and password input", () => {
    
    const user = {
      userName: 'Bob',
      password: 123456,
    };
      
    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      "Hello, Joana! Que bom ter você de volta"
    ); 
  });

  it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });  
});
Execute no seu terminal o comando npm test e veja o que acontece. Ao rodar o teste você receberá a mensagem que um dos testes falhou, como na imagem abaixo:

Observe que, como dito anteriormente, mesmo existindo um teste com erro, os outros testes foram executados normalmente. Além disso, o log do erro gerado pelo jest te possibilita identificar rapidamente onde foi que ocorreu o erro, uma vez que é exibida a mensagem que está contida no teste em questão. Neste caso o erro ocorreu no teste contendo a descrição " verifyCredentials() calls the correct function depending on the user and password input", como você pode ver aqui:

Outro ponto positivo da utilização do Jest para fazer nossos testes é que ele traz uma mensagem contendo um diff, ou seja, o que era esperado de ocorrer no teste e o que de fato aconteceu. Isso nos ajuda a entender mais rapidamente onde está o erro. Neste exemplo o teste esperava receber como valor um objeto contendo uma pessoa usuária com o nome "Joana", mas ao invés disso recebeu "Bob".
Sensacional, não é mesmo? Então bora pro conteúdo que na sequência vamos explicar o que são os expect e os matchers e como eles funcionam.

Expect e matchers
Ao escrever testes, você precisa verificar que valores satisfazem a algumas condições. A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers . Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes, inclusive no Jest . Podemos pensar neles como uma ponte que dita qual é a relação entre o resultado que temos e o que queremos. O expect recebe o valor a ser testado e retorna um objeto representando uma expectation . Sobre esse objeto pode-se chamar os matchers que Jest fornece.
Vamos passar pelos matchers mais comuns. É interessante saber que existem muitos outros matchers que podem ser encontrados na documentação oficial do Jest . No dia a dia, é normal quem desenvolve ler documentação , porque na maior parte das vezes esse é o local com mais informações atualizadas. Conforme as ferramentas que conhecemos passarem a ter mais opções de uso e funcionalidades, será normal recorrermos à documentação para aprendermos a utilizá-las melhor.
toBe
toBe , que utilizamos no exemplo anterior, é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.
Copiar
expect(5).toBe("5")
toEqual
Para compreendermos a diferença entre toEqual e toBe , precisamos entender que no JavaScript existem duas formas de atribuir valores. A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função. Essas formas de atribuição são conhecidas por valor e referência .
Para nos aprofundarmos nessas duas formas, é importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).
Os tipos primitivos a atribuição ocorre por valor , ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:
Copiar
let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro
Por outro lado, os objetos tem atribuição por referência , ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, por tanto podemos considerar que é uma forma de criar um apelido ( alias ) para o original, ou seja, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:
Copiar
let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol
Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript . Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:
Copiar
test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});
Valores booleanos
null , undefined e false são valores falsy . Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. Jest fornece matchers específicos para cada um. Leia mais sobre eles na documentação do Jest .
Números
Há matchers para as principais formas de comparar números. Leia aqui sobre esses matchers
Strings
Para comparar string com expressões regulares, utilize o matcher toMatch .
Arrays
Você pode verificar se um array contém um item em particular utilizando toContain . Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual . toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.
Objetos
É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos.
Exceções
Lembra quando aprendemos sobre os fluxos de exceções e lançamentos para casos de erro no conteúdo do dia 7.2 utilizando o método throw na sessão Throw e Try/Catch ? O matcher toThrow será usado para testar se uma função é capaz de lançar um erro quando executada. Por exemplo, se quisermos testar uma função verificaNumeros('string') passando uma string como parâmetro, o matcher toThrow irá testar o erro retornado pela função para verificar se o log de error está correto, por exemplo. Para testar se uma função está retornando um erro, é importante estar atento à sintaxe do .toThrow :
Copiar
const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});
Note que para testar se um erro é lançado, passamos para o expect uma função. Chamamos multiplyByTwo dentro da arrow function . Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido") . Observe que nos dois casos a função que queremos testar é chamada indiretamente por uma arrow function . Seguir essa sintaxe é importante para que o seu teste funcione corretamente.
not
not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:
Copiar
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});
Estes foram alguns dos matchers mais comuns. Existem muitos outros, e você pode até mesmo criar os seus. A documentação do Jest explica com detalhes todos os matchers disponíveis. Consulte-a sempre!

