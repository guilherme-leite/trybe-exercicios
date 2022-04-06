async/await
Para aprender a realizar testes utilizando o async/await , você vai realizar uma requisição a API e testar o seu retorno em caso de sucesso e de falha.
Mas peraí, se eu vou realizar uma requisição para API para testar se ela está funcionando, o que acontece se ela estiver fora do ar?
Bem pensado! Ao fazer uma requisição para uma API, nós dependemos de diversos fatores externos ao nosso código, alguns exemplos são ter acesso a internet e o serviço da API funcionar... Então, tenha em mente que:
Você nunca deve testar uma requisição real para a API!
Imagine que você está utilizando uma API da previsão do tempo, no momento da criação do seu teste a previsão era de sol. No dia seguinte você vai dar continuidade para os testes, mas agora a API está retornando que a previsão é de chuva, ou seja, o teste passava enquanto a previsão era sol, quando passou a ser chuva, seu teste falhou. Além da falta de controle sobre o retorno de uma requisição, você também pode ter problemas como:
A URL da API estar incorreta.
Uma falha na conexão com a internet.
Uma instabilidade no servidor que gerencia a API.
Se nunca podemos testar nossa função com uma API real, então como podemos realizar os testes?
Lembra que ali em cima comentamos que o Jest nos oferece diversas ferramentas para testarmos nosso código? Uma dessas ferramentas é a simulação na execução da função, podendo definir o retorno que ela terá. Dessa forma, você consegue controlar diversos cenários, como sucesso e falha.
Não se preocupe em entender agora como essa simulação é criada, você vai aprender a criar essas simulações no módulo de Front-end, quando for trabalhar com testes em React. O objetivo do dia de hoje é entender como realizar testes em funções assíncronas, combinado?
Para acompanhar o dia, disponibilizamos um repositório com a simulação pronta para que você possa focar no conteúdo de hoje, que são testes assíncronos. Atente-se apenas ao arquivo fetchCharacter.js , que é responsável pela requisição e ao arquivo de teste fetchCharacter.test.js , que é o único arquivo a ser alterado, tudo bem? Siga o passo a passo do Readme para realizar o fork do repositório e executar a aplicação.
A API que será usada é a Superhero API , que possui como parâmetro um token , que funciona como uma senha para possibilitar o uso da API e um id ( https://www.superheroapi.com/api.php/TOKEN/ID ). O token já está configurado, portanto, a única informação que a ser passada para a função fetchCharacter é o id .
Ao abrir o arquivo fetchCharacter.js , você vai perceber que ele possui duas funções: uma com async/await e outra com .then() , que está comentada. O motivo para isso é apenas para você ter nitidez que pode utilizar e escolher qualquer uma das duas formas.
Você buscará um super herói por meio do id que é passado na URL, e o retorno será um objeto contendo o super herói correspondente e os seus atributos.
A url base a ser utilizada é https://www.superheroapi.com/api.php/4192484924171229/720 , que irá retornar uma personagem.
Nosso primeiro passo é estruturar o bloco de teste com async/await . Cada bloco aceita dois parâmetros, o primeiro é a descrição do que está sendo testado e o segundo é uma função anônima, ou seja, sem nome. A estrutura inicial fica assim:
Copiar
  it('descrição', () => {});
Para testar código assíncrono, é preciso fazer uso do async/await . Para isso, adicione o async antes da função anônima e o await no momento em que chamar a requisição. Veja:
Copiar
  it('descrição', async () => {
    await requisicao();
  });
Para organizar melhor seus testes, você pode utilizar o describe , que serve justamente para descrever, de forma geral, o que seu arquivo está fazendo:
Copiar
  describe('descrição geral', () => {
    it('descrição', async () => {
      await requisicao();
    });
  });
Agora que você já tem a estrutura, vamos pôr a mão na massa!
O primeiro teste será para verificar qual o nome da personagem. Mas, para isso, é preciso saber como é a estrutura de resposta da API utilizando um console.log() :
Utilize o id 720 .
Copiar
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    console.log(character);
  });
A resposta da API é um objeto, certo? E, se você precisar testar o nome da personagem, pode acessar a chave name desse objeto, ou seja character.name .

Log do objeto
Copiar
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    console.log(character.name);
  });
No terminal aparece o nome da nossa personagem: Wonder Woman .

Log do nome da personagem
Agora implemente o teste:
Copiar
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
Eba! O teste passou! Mas para garantir que está tudo certo, é preciso verificar se não é um falso positivo. Para isso, altere o resultado esperado por Spider Man .
Copiar
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Spider Man');
  });
O teste falhou, isso significa que você não possui um falso positivo!
Volte o resultado esperado para Wonder Woman .
Boa! Você testou um caso de sucesso na requisição da API, certo? Agora, é preciso testar um cenário de erro ao executar a função sem nenhum parâmetro.
Siga o mesmo processo anterior, observando o retorno da requisição pelo console.log() :
Copiar
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    console.log(failRequest);
  });
Apareceu um erro no seu terminal, certo? 👻
Não se preocupe se o texto do erro for grande, observe a primeira linha:

Log do erro 'You must provide an url'
Perceba que na primeira linha do erro aparece o seguinte:
Error: "You must provide an url"
Esse erro é lançado pela requisição e, para testar esse cenário, é necessário reproduzir esse objeto de erro criado quando a promise foi rejeitada.
Informe ao teste que o esperado é que a requisição retorne um erro que possua o texto 'You must provide an url'.
Copiar
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();

    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
Como você pode notar, foi utilizado o new Error , que é um construtor do JavaScript responsável por criar um objeto de erro. Ao testar a falha da requisição, estamos comparando o erro lançado pelo teste com o erro lançado pela requisição.
Você vai se aprofundar no que é um construtor no módulo de Ciência da Computação
Até aqui foi testado o resultado da requisição, mas como testar o valor da promise, ou seja, esperar que a promise seja resolvida ou rejeitada? Existem dois matchers, o resolves e o rejects que fazem o teste direto na promise, dá uma olhada nesse vídeo aqui 👇

Bom, até agora você testou os cenários de sucesso e de falha da requisição, correto? O sucesso acontece quando é passado o parâmetro esperado e a falha quando não é passado parâmetro algum. Mas o que acontece se utilizar um parâmetro estranho, ou seja, quando a url receber alguma informação que não existe?
Tenha em mente que cada API trata erros de forma diferente. Por isso, sempre leia a documentação e use o console.log() para ver os retornos.
Primeiro verifique o que a API retorna e para isso vamos utiilize o console.log() ;
Copiar
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    console.log(response);
  });
Perceba que o retorno do console foi esse:

Log do erro 'Invalid id'
Ou seja, quando é passado um id inválido como parâmetro da função, o retorno é Invalid id .
Então vamos ao teste:
Copiar
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
  });
Verifique se o teste não é um falso positivo, para isso troque o texto Invalid id por Erro . Se o teste falhar, significa que não é um falso positivo.
Foi testado três possíveis casos:
quando nosso id está correto
quando não passamos id algum
quando ele é incorreto.
Agora, para finalizar, é necessário testar a chamada da função e se a url recebida é a correta. Para isso, é preciso executar a função fetchCharacter , mas nesse caso, é necessário 'esperar' que a função fetch seja chamada 4 vezes e também se é executada com o parâmetro correto:
Copiar
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
Por que precisamos testar o fetch nessa situação?
A função fetchCharacter é responsável por receber o id e passar para a função fetch . É a fetch que executa a requisição a partir da url e só então a fetchCharacter retorna o resultado. Os 3 primeiros testes conferiram o resultado da requisição, no último teste, foi verificado, de fato, a implementação da função que executa a requisição, ou seja, testar se fetch foi chamada 4 vezes (executamos a função uma vez para cada teste realizado) e verificar se, no último teste, foi chamada com a url correta para buscar os dados na API. Note que, ao utilizar o matcher toHaveBeenCalledTimes , ele verificou quantas vezes a função fetch foi executada dentro de todo o describe , ou seja, vazou do escopo. Para evitar esse tipo de problema, você pode utilizar o beforeEach ou o afterEach .
Pausa para aquele cafezinho e partiu pôr a mão na massa!
coffee
