Operações assíncronas
Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada, é necessário que uma operação termine para que outra comece. Em uma linha de produção de automóveis por exemplo, várias etapas de produção são codependentes. Podemos relacionar estas etapas de produção às operações síncronas em JavaScript. Observe o exemplo abaixo para que esta analogia fique mais nítida:
Copiar
console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');
Note que existe uma ordem específica de etapas que não pode ser quebrada pois uma afeta diretamente a outra. Sem roda, não adianta encaixar parafusos, sem encaixar parafusos, fixar a roda não é possível.
Agora imagine que o nosso estoque de parafusos está chegando ao fim e é necessário que façamos uma reposição para que a linha de produção não pare. No entanto, nossa operação não cobre este tipo situação e nossa linha de produção para enquanto uma pessoa funcionária irá comprar os parafusos e repor o estoque.
Copiar
console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');
Observe que estamos trabalhando de forma ineficiente e adicionando etapas desnecessárias à nossa produção pois se tivermos parafusos suficientes em estoque, não precisamos parar a montagem para que mais parafusos sejam comprados e repostos. Assim como na nossa linha de produção, existem operações que não possuem esta codependência em JavaScript, e com objetivo de cobrir justamente este tipo de situação surgem as operações assíncronas .
Rode em seu editor o código abaixo e veja como nossa linha de produção já não depende mais das etapas de compra de parafusos e de reposição do estoque.
Não se preocupe com o código em si, falaremos da função setTimeout logo mais! 😉
Copiar
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das chamadas só ocorre ao final. Isto acontece pois utilizamos a função setTimeout . É muito comum que esta função seja utilizada para simular comportamentos assíncronos. Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.
Agora, vamos ver um pouco da prática realizando este exercício de fixação. Copie o código para ser executado na sua máquina:
Copiar
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);
Copiar
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3] ? Isso ocorre por causa da função setTimeout . Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1) . Como o console.log é uma função síncrona, ele é executado antes do setTimeout terminar.
Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
Copiar
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
Observe que, além de adicionar o setTimeout , o array [1, 2, 3] foi modificado para [2, 3, 1] . Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1 .
Para saber mais a respeito de setTimeout , acesse este link.

Callbacks
Agora que o conceito de assincronicidade está mais nítido, é hora de dar luz a callbacks !
De forma resumida, callback é uma função passada como parâmetro para outra função . Sem perceber, você viu um exemplo de função callback quando chamamos a função setTimeout . Esta função recebe dois parâmetros, o primeiro é a função callback que passamos através de uma arrow function , e o segundo é o tempo (em milissegundos) que o interpretador irá esperar para executar a função. Observe a estrutura dela:
setTimeout(1parametro, 2parametro);
O primeiro parâmetro é uma callback sem nome: () => {} . O segundo parâmetro será o tempo de espera: 2000 (2000 milissegundos ou 2 segundos, por exemplo).
setTimeout(() => {}, 2000);
Agora veremos um exemplo prático de como podemos utilizar funções callback . Copie e analise com calma cada trecho da implementação do código, se necessário, volte na explicação para que a implementação seja bem compreendida!
Este exemplo está em português para facilitar a compreensão, os próximos estarão em inglês, ok?
Copiar
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;
Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas, despesas , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, renda , representa o quanto esta pessoa recebeu neste mesmo mês.
Nosso próximo passo será implementar uma função que trate estas informações para que tenhamos como resultado um balanço de entradas e saídas do mês.
Copiar
const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};
Neste trecho da implementação, podemos notar que foi adicionada a função despesaMensal , que recebe três parâmetros: renda , despesas , e callback . Acredito que você deva estar pensando: "O que este parâmetro callback está fazendo nesta função?".
Como vimos anteriormente, callback é, basicamente, uma função passada por parâmetro para outra função. Neste exemplo, o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos despesas e retornará este valor para a constante despesaTotal .
Copiar
const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

despesaMensal(renda, despesas, somaDespesas);
Por fim, podemos observar a implementação da função callback , representada pela função somaDespesas . Essa função está tratando as informações contidas no array de objetos despesas e retornando o valor total de gastos.
Em síntese o que fizemos foi:
1 - Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback .
3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um valor de gastos total.
4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.
Copiar
// Declaramos nossa variável de despesas
const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

// Declaramos nossa renda
const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
  // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
  // que vai receber nosso parâmetro/variável "despesas"
  const despesaTotal = callback(despesas);
  // Definimos nosso saldo final, que é nossa renda - nossa despesa total
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// Definimos nossa função que será passada como parâmetro
// essa função recebe o parâmetro despesas a partir da função principal despesaMensal
const somaDespesas = (despesas) => {
  // Separamos cada item do nosso array de despesas
  // e fazemos um reduce para somar os valores
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

// Executamos a função principal com as variáveis renda, despesas
// e a nossa função somaDespesas
// callback = somaDespesas
despesaMensal(renda, despesas, somaDespesas);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00
Reparou que você já estava usando callbacks desde a semana de JavaScript , com eventListeners e, até a semana passada, com filter , map e reduce ? A função que você passa como parâmetro para cada uma delas é exemplo de função callback . 😉
wink
Além disso, lembre-se do exemplo da pizza mencionado no Por que isso é importante ? O que você faz quando o pedido da pizza chega, que nesse caso é jantar, corresponde a uma callback .
Antes de seguir para os exercícios de fixação propostos abaixo, veja o vídeo a seguir para garantir o entendimento sobre callbacks :

Para fixar
Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a execução/chamada dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro ( callback ).
Vamos ver um exemplo de como esse processo acontece:
Copiar
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);
Vamos ao passo a passo:
Definimos a função userFullName ;
Definimos a função getUser
Definimos que o parâmetro que a nossa getUser vai receber se chama "param".
Ao executar a função getUser , passamos a função userFullName como parâmetro.
Ou seja, o parâmetro "param" de dentro da nossa getUser é igual à função userFullName . Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que executarmos a nossa função.
Tenha tranquilidade e lembre-se sempre: Nada melhor do que a prática. E falando nisso... vamos praticar? ;)
Agora, faça estes exercícios de fixação:
1 - Adicione uma callback como parâmetro da funcão getUser .
No código abaixo você tem a função getUser , que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:
Insira o retorno da função getUser ;
Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".
Copiar
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
2 - Passe, como parâmetro e como retorno, uma callback para a função getUser .
No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:
Insira uma callback como parâmetro da função getUser ;
Retorne a callback passada como parâmetro na função getUser ;
Copiar
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
Obs.: Analise o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality) . Tem hora que o nome da pessoa é impresso antes e tem hora que a nacionalidade da pessoa é impressa antes!

Lidando com erros em operações assíncronas
No último exercício, você deve ter reparado que está usando em conjunto callbacks e assincronicidade, que nesse caso correspondem a:
operação assíncrona : retorno de user depois de um certo tempo, que varia;
callbacks : as funções userFullName e userNationality , que são chamadas depois que o usuário é retornado.
Nesse caso, a operação assíncrona sempre finaliza com sucesso, e existe uma callback que atua sobre o resultado desse sucesso. Mas isso não reflete por completo todas as operações assíncronas.
Suponha que você esteja pegando dados de usuário via requisição em um outro servidor. Podemos garantir que essa requisição vai ocorrer sempre com sucesso? E se houver uma falha de conexão? E se o servidor não estiver funcionando no momento da requisição? Esses casos são exemplos de fatores externos, sobre os quais não se tem controle algum e que precisam ser tratados.
Ou seja, da mesma forma que se tem uma callback para quando a operação assíncrona tem sucesso, também precisaria ter uma callback para quando a operação assíncrona termina com erro.
Para fixar
Vamos botar tudo isso em prática com este exercício de fixação:
1 - Adicione uma callback e trate o erro retornado.
A função getCountry abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma callback para poder realizar qualquer operação sobre o país retornado.
Adicione um segundo parâmetro, que deve ser uma callback , na função getCountry ;
Retorne essa callback na função getCountry de forma que trate a mensagem de erro.
Copiar
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);

Testes Assíncronos com Callbacks
Você viu no exemplo anterior que nem sempre a operação assíncrona será executada com sucesso. Por esse motivo, é importante manter uma boa cobertura de testes a fim de prevenir possíveis erros. Para isso, você irá utilizar o Jest. Caso não se lembre de como instalar e iniciar o Jest, reveja este bloco antes de começar a colocar a mão na massa.
Ao realizar testes assíncronos com callbacks, é necessário ter cuidado com falso-positivo (quando o teste deveria falhar mas acaba passando). Isso acontece pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.
O exemplo abaixo gera um falso-positivo:
Copiar
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
Copie o código acima em um arquivo .test.js e execute o comando npm test na sua máquina para ver! Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase "Deveria falhar!" sequer aparece no console.
Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.
Vamos reescrever o teste chamando a callback done após a asserção para indicar que o teste acabou: O termo asserção é a verificação realizada pelo Jest para saber se um valor atende alguma condição
Copiar
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});
Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro, chamando a callback done :
Copiar
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done();
    }
  }, 500);
});
Estamos quase lá... O código acima irá gerar um falso-positivo. O motivo é que não estamos passando nenhuma ação a ser realizada quando o erro acontece e "encerramos" nosso teste com o done() sem lançar nenhum erro, dessa forma o teste é interpretado como "correto". Para resolver, podemos passar o parâmetro de erro para o catch . Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch , que vai pegar esse erro e vai encerrar nosso teste lançando um erro.
Copiar
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha
    }
  }, 500);
});
Agora sim, nosso teste falhou! Isso significa que você conseguiu testar com sucesso a callback.
Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números:
Copiar
const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});
Quando estiver realizando testes, é muito importante verificar se os resultados exibidos não são falso-positivos. No exemplo acima, em que o teste está passando, experimente mudar a implementação da função asyncSum para que retorne valores incorretos e verifique se o teste irá falhar. Por exemplo, se mudarmos os resultado para ser a + b + 1 o teste falha dizendo que esperava 15 , mas recebeu 16 .
Não se preocupe, vamos treinar bastante! Agora, vamos para o próximo tópico \o/
Acredite, vai ser muito útil pois você vai conseguir economizar tempo e código ;)

Setup e Teardown
Quando você está lidando com um ambiente de testes dentro do jest, é importante saber que existem 3 ciclos, sendo possível utilizar cada um deles para ajudar a configurar e realizar seus testes.
Até esse momento, você viu como realizar os testes utilizando o Jest, que é apenas um dos ciclos possíveis. Vamos entender, a seguir, quais são os outros dois.
Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.
Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.
Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.
Maravilha! Agora que você sabe conceitualmente que existem esses ciclos dentro do ambiente de testes, você irá entender primeiro porque precisamos deles.
Para entender isso, dê uma olhada nos códigos a seguir:
Copiar
// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};
Aqui temos a declaração de uma variável cities , que é uma lista de cidades;
Há duas funções, addCity que adiciona cidades ao array e removeCity que... Pasmem! Remove cidades desse array.
Agora você vai realizar dois testes, para saber se essas funções funcionam exatamente como deseja.
Copiar
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

test('Testa a função addCity', () => {
  expect.assertions(4);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(3);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
});

test('Testa a função removeCity', () => {
  expect.assertions(4);
  removeCity('Campinas');
  expect(cities).toHaveLength(2);
  expect(cities).not.toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
});

Como você observou, os testes tiveram sucesso, significando que as funções estão funcionando.
Mas... e se você criar outras funções, que também manipulam os dados das cidades?
Isso fará com que você tenha que escrever novos testes.
Portanto, você teria que lembrar de como o array de cidades ficou após o último teste, para poder continuar do ponto onde parou, certo?
Imagine quanto tempo você perderia se tivesse uma aplicação com dezenas de funções?
Para lidar com essa questão é que existem os ciclos de setup e teardown .
Maravilha! Agora que compreendeu porque eles existem, você vai entender como eles são utilizados.
Copiar
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

beforeEach(() => {
  cities = ['Pindamonhangaba'];
});

afterEach(() => {
  cities = [];
});

test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});
No código acima, você declarou uma função beforeEach , que roda antes de cada um dos testes, ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles, para definir as suas configurações. Como visto antes, este é o ciclo anterior aos testes chamado de setup .
Nesta fase, é configurado o array para ter sempre o valor ['Pindamonhangaba'] , portanto, em todos os testes realizados, o valor do array será sempre o mesmo.
Também declaramos uma função afterEach , que roda após cada um dos testes e faz a limpeza dos dados do nosso array depois de cada execução. Além disso, como o próprio nome indica, ela é executada após cada teste no terceiro ciclo dos testes, que é a fase de teardown .
Geralmente utilizamos esta fase para limpar os valores que foram manipulados durante os testes.
Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe , ele rodará apenas dentro dos testes que estão nesse describe .
Ou seja, se criarmos um segundo describe , aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.
Para visualizar melhor, veja outro exemplo dentro do mesmo contexto.
Copiar
// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
  beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do primeiro bloco de testes', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
  });
  
  test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});

describe('Agrupa o segundo bloco de testes', () => {
  beforeEach(() => {
    cities = ['Tangamandapio'];
  });
  
  afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity dentro do segundo bloco de testes', () => {
    expect.assertions(3);
    expect(cities).toHaveLength(1);
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toContain('Tangamandapio');
  });
  
  test('Testa a função removeCity dentro do segundo bloco de testes', () => {
    expect.assertions(2);
    removeCity('Tangamandapio');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
  });
});
Ao rodar esses testes, terá o seguinte resultado:

Dessa maneira, você pode organizar uma configuração para cada bloco de testes dentro de um describe .
Uma questão importante é que para facilitar o entendimento, nós utilizamos funções síncronas para entender como utilizar o setup e o teardown , porém elas geralmente são utilizadas em funções assíncronas.
Ufa, bastante coisa não é mesmo? Aproveite para fazer uma pausa, tomar um café, se alongar e volte para fixar seus conhecimentos!
done

