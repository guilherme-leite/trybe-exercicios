Application Programming Interface (API)
Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.
No momento, vamos focar em APIs baseadas na web, como esta vista no modelo abaixo. Essas APIs retornam dados em response (resposta) a um request (requisição) do cliente, nos permitindo acesso a dados de fontes externas.

Imagem que demonstra o funcionamento de uma API no contexto da web.
APIs também nos permitem compartilhar dados com outros sites ou aplicações. Você já deve ter observado a opção de "Compartilhar no Facebook" ou "Compartilhar no Twitter". No momento em que você clica nessa opção, a aplicação que você está visitando se comunica com sua conta do Twitter ou Facebook e altera os dados do seu status, por exemplo, através de uma API.
Por que precisamos de APIs?
Imagine a seguinte situação: você está trabalhando em um blog e gostaria de exibir para os visitantes os tweets que fazem referência a ele.
Uma estratégia seria contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados em tempo real.
Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.
Quem precisa criar e manter APIs?
APIs públicas e baseadas na web são desenvolvidas e aprimoradas constantemente por grandes empresas de tecnologia (principalmente de mídias sociais), organizações governamentais, startups de software ou qualquer outra empresa ou pessoa que colete dados e precise disponibilizá-los de algum modo.
Como uma API se diferencia de um back-end padrão de um site?
Toda API é um back-end, mas nem todo back-end é uma API.
Um back-end padrão de um site retorna templates (um arquivo HTML pronto, por exemplo) para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response .
As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON .
O que é JSON e por que o usamos?
JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
Copiar
{
  "trybers": [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value . A key (chave) fica no lado esquerdo e o value (valor) no lado direito. No array trybers, podem ser adicionados vários outros objetos.
JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras. Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.
Apesar do nome, ele não é um objeto JavaScript, apenas é estruturado de forma que faz uso de chaves e valores. Então, por não ser um objeto nativo do JavaScript, precisamos traduzir ele para que fique a par da linguagem que estamos usando. Para isso existe a função JSON.parse() , assim como existe a função JSON.stringify() que transforma uma estrutura JavaScript em string.
Vamos ver um breve exemplo a respeito disso. Para simplificar, no arquivo script.js , vamos forçar por meio das crases para que nosso JSON inicie-se como do tipo string.
Crie um arquivo index.html e adicione o seguinte código:
Copiar
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <header>
    <h1>Importância do JSON</h1>
  </header>
  <main>
    <article>
      <h2>O JSON é utilizado por empresas como:</h2>
      <ul id="corporations-used-by"></ul>
    </article>
    <article>
      <h2>As vantagens de se usar JSON são:</h2>
      <ul id="advantages"></ul>
    </article>
    <article>
      <h2>Esse formato também pode ser lido pelas seguintes linguagens:</h2>
      <ul id="languages-used-by"></ul>
    </article>
  </main>
  <script type="module" src="script.js"></script>
</body>
</html>
Também crie um arquivo script.js e adicione a lógica a seguir:
Copiar
const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});
Nesse script, utilizamos o JSON.parse() para analisar nosso json (nesse caso, uma string) e converter em um formato compatível com o JavaScript. Assim, temos mais poder sobre as informações e podemos manipular elas para, por exemplo, adicionar elas ao DOM.
Como utilizar APIs na minha aplicação?
APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
Encontre uma API pública, que seja bem documentada e mantida;
Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
Entenda o formato dos dados disponíveis;
Faça requests e receba responses da API com os dados que você deseja receber.
Fazendo uma requisição a uma API
Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
No exemplo a seguir, vamos fazer um request para uma API , que retorna um JSON como response .
Copiar
wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q
Você também pode abrir o link dentro do seu browser e observar o retorno dos dados no formato JSON .

Relembrando o fluxo assíncrono
Vamos relembrar rapidamente como funciona a ordem de execução de funções no javascript : as funções são lidas de cima para baixo e suas execuções são colocadas em uma fila. Assim, a primeira função lida é a primeira a ser executada. Quando sua execução termina, ela "entrega seu retorno", permitindo que o mesmo processo ocorra com a próxima função da fila.
Fila
A função assíncrona é diferente! Quando o javascript lê uma função desse tipo, ela é enviada para uma área especial, e a fila síncrona continua correndo. Quando a função assíncrona termina sua execução, ela volta para a fila novamente para "entregar a resposta" de sua execução. Vale lembrar que a área especial das assíncronas não é muito ordenada, ou seja, a primeira função assíncrona que entra não é, necessariamente, a primeira a sair, já que depende do tempo de execução de cada uma. Grave essas informações, elas serão importantes para explicar alguns acontecimentos mais a frente!

Comparação entre o fluxo síncrono e assíncrono
Com esse sistema de "filas", fica difícil colocar uma ordem nas funções assíncronas. Como fazer uma função executar somente depois de outra, se não existe uma ordem para sua execução? Para isso, as pessoas desenvolvedoras começaram a usar callbacks , o que era excelente a princípio. Porém, em alguns casos, a sequência de callbacks crescia de forma descontrolada, criando o famoso callback hell , que vimos anteriormente. Para contornar o problema, as callbacks deram lugar às Promises !
Para saber mais sobre Callback Hell , você pode acessar esse link . Ele está em inglês, mas existe a opção de traduzir o site ao clicar com o botão direito do mouse sobre a página ou algum texto. ;)

Promises
O foco neste bloco é o consumo de APIs utilizando o fetch e por esse motivo vamos explicar de forma básica o conceito de Promise , já que o retorno de um fetch é uma Promise.
As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:
As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções;
As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono;
As Promises são construídas de uma forma distinta: para criar uma nova Promise, usamos um Construtor .
Como não iremos nos aprofundar em Promises neste bloco, não iremos detalhar o processo de construção de Promises. Mas tenha tranquilidade, você irá ver como fazer isso no módulo de Back-end onde é mais utilizado.
Outro ponto importante é que as Promises possuem 3 estados:
Pending (pendente): estado inicial, significa que ela está em execução;
Fulfilled (resolvida): estado de sucesso, significa que tudo deu certo e foi retornado o valor de sucesso;
Rejected (rejeitada): estado de rejeição, significa que algo deu errado e foi retornado o erro que gerou essa rejeição.
Então quando você se deparar com um Promise { <[estado]> } em um console.log() pode significar que você tentou acessar o valor de uma Promise antes dela ter finalizado sua execução.
E o que você precisa saber sobre Promise para usar o fetch ?
Quando utilizamos o fetch recebemos uma Promise, o que significa que temos uma "promessa" de que aquilo vai retornar algo para você. No caso do fetch temos dois possiveis retornos: em caso de sucesso, recebemos a response (que também é uma Promise e contém o dado final que queremos acessar), e caso algo dê errado com a nossa requisição, recebemos as informações sobre o erro. Mas toda promessa é assíncrona e para termos o retorno dela devemos esperar um tempo até essa promessa ser resolvida, então como fazemos isso?
Para resolver esse problema temos duas opções, .then() .catch() e async/await com try/catch . Esses métodos vão garantir que o código que estamos desenvolvendo aguarde o retorno de uma Promise antes de executar os próximos passos. Veremos esses métodos com mais detalhes junto com o conteúdo de fetch . Vamos lá?!

Fetch API
No contexto do Front-end, a maioria dos casos em que você precisa utilizar funções assíncronas são em requisições.
Um bom exemplo é a função fetch() da Fetch API !
A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch() , utilizada para fazer chamadas às URL's das APIs . Trata-se de uma função assíncrona, baseada em uma promise.
A função fetch pode receber dois parâmetros:
1 - URL do serviço alvo da requisição;
2 - E, opcionalmente, pode ser passado um objeto contendo algumas informações sobre requisição de API. Esse objeto contém chaves com informações específicas para aquela chamada. Essas especificações estão sempre presentes na documentação de uso daquela API específica. Não se preocupe muito em como obter essas informações por agora ; nesse início, daremos essas informações para que você se acostume a usar o fetch() .
O retorno da chamada varia conforme a API utilizada, não só em conteúdo, mas também formato. Como nosso maior foco é JavaScript, lidaremos principalmente com respostas em formato JSON ou respostas que possam ser reformatadas para tal.
A função fetch é responsável por enviar requisições a APIs . Porém, essa não é sua única responsabilidade. Ela também possui ferramentas para tratar os dados recebidos e devolvê-los, além de lidar com os erros.
Gestores de fluxo
Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso, vamos usar o fetch para fazer uma requisição assíncrona a uma API .
Vamos criar uma função que faz um fetch apenas para um endpoint específico. Entenda endpoint , em se tratando de APIs, como sendo o caminho (url) que retorna alguma informação específica da API. Para isso, vamos usar como endpoint uma url que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).
Antes de você ir para o código, como você vai rodar o código direto no Node e não no browser, será necessário instalar o node-fetch . Execute o comando abaixo caso você ainda não tenha o package.json :
Copiar
npm init -y
depois, instale o node-fetch :
Copiar
npm i node-fetch@^2
Note que foi utilizado o @^2 ao final do nome do pacote para especificar que deve ser instalado a versão mais atual, mas que não seja maior que a 2 . Essa especificação ocorre visto que a versão 3 do node-fetch foi alterada para ser usada através de módulos do JS, podendo ser importada apenas através do import e não mais do require .
Agora crie um arquivo fetch.js e insira o código abaixo para testar sua funcionalidade:
Copiar
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();
Ao rodar esse código você vai perceber que no console foi impresso Promise { <pending> } ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.
Agora vamos corrigir esse problema:
Copiar
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console. Bacana né?!
Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do fetch .
O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a resposta do fetch (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!
Vamos ver o que acontece no código acima. A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.
Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:
Copiar
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
Note que para forçar o erro retiramos o https:// do início da url .
Assim como o .then() recebe o retorno caso a requisição seja bem sucedida, o .catch() recebe o erro gerado caso a requisição não seja bem sucedida, que é passado para ele como argumento de sua função interna. Assim, quando o fetch retorna algum erro, todos os .then() são pulados e é executado o primeiro .catch() encontrado. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo ele é geralmente usado no final.

Async e Await
O async é uma mão na roda. Para começar a usá-lo, basta colocar o async antes da definição de uma função. Vamos refatorar a função anterior para usar async :
Copiar
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
Pronto! Perceba que continua funcionando exatamente da mesma forma que anteriormente. Tá achando que acabou? Ainda tem mais!
Whoo
A funcionalidade async sozinha é fantástica mas não resolve nosso problema com a função fetchJoke . Assim, junto com ela vem um bônus, o await . O await só pode ser usado dentro de uma função com async e ela faz exatamente o que diz, faz a função esperar uma resposta para continuar sua execução. Vamos refatorar a fetchJoke :
Temos duas maneiras de utilizar o async await , a primeira é mesclando com o .then() e o .catch() :
Copiar
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
Usando o await , a fetchJoke espera o fetch terminar toda sua execução (até o último .then() ou .catch() ) para só depois executar o console.log() .
A segunda é refatorando o .then() e o .catch() usando o try e o catch :
Copiar
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
Note que, quando você usa o try e o catch , é executado o código inserido no escopo do try , e caso alguma parte desse código dê erro, você o trata no escopo do catch(error) .
it's done
Finalmente, chegou ao fim! Foi muito conteúdo que você viu agora, mas saber como fazer requisições em APIs , com certeza, é algo que vai te levar a outro nível como pessoa desenvolvedora. Agora, não se acomode ainda, levanta, dá uma alongada, pega um café e vamos fazer alguns exercícios para fixar!

