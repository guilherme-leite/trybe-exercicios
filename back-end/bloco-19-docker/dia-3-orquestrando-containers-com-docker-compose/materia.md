Networks - Redes no Docker
Anteriormente, vimos como "expor" as portas de nossos containers para acessá-los de fora, utilizando o parâmetro EXPOSE em nosso Dockerfile , e também como fazer a atribuição ( bind ) com as portas de nossa máquina host utilizando o parâmetro -p no docker container run . Chamamos de mapeamento de portas esses recursos que vinculam ou tornam visíveis portas do container para a nossa máquina localhost .
Já o Docker network , é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.
Por padrão, o Docker possui 3 redes que são criadas junto com ele: bridge , none e host . Cada uma delas tem características específicas quanto a conectividade para seus containers . Podemos consultá-las executando:
Copiar
docker network ls
Vamos entender o que é cada uma!
Bridge
Ao ser iniciado, todo container é associado a uma rede e, caso uma rede não seja especificada explicitamente por nós, ele será associado a rede Bridge .
Todos os containers associados a essa rede poderão se comunicar via protocolo TCP/IP e, se soubermos o IP do container que queremos conectar, podemos enviar tráfego a ele. Porém, os IPs de um container são gerados automaticamente, por isso não é muito útil fazermos a conexão dessa forma, pois sempre que o container for reiniciado, o IP poderá mudar.
Uma maneira de fazermos a descoberta do IP automaticamente pelo nome, é utilizando a opção --link *.
* No entanto, a própria documentação do Docker desencoraja seu uso e alerta que essa flag ( --link ) pode ser removida eventualmente.
Para fins didáticos, vamos ver como isso funciona, utilizando uma imagem busybox , mas mais adiante veremos a melhor alternativa para fazer isso.
Digite no terminal:
Copiar
docker container run -ti --name container1 busybox

docker container run -ti --link container1 --name container2 busybox
Agora, o container2 poderá se conectar no container1 . Para fazermos um teste simples, podemos fazer um ping no container1 , dentro do container2 , apenas digitando no terminal interativo do container2 :
Copiar
ping container1
* É bom ressaltar que a opção --link não é necessária para permitir que os serviços se comuniquem, pois, por padrão, qualquer serviço pode alcançar qualquer outro serviço a partir de seu IP . Os links apenas permitem definir apelidos extras pelos quais um serviço pode ser acessado de outro serviço.
⚠️ Dica: Perceba que nos exemplos utilizamos uma imagem chamada busybox , ela é uma suite que possui vários utilitários Unix, dessa forma é muito útil quando queremos explorar comandos como o ping para testes.
Host
Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host , ou seja, da máquina que roda o ambiente Docker . O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.
None
Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.
Criando Nossa Rede
A forma mais recomendada de comunicarmos nossos containers é criando nossa própria rede. Através dela conseguimos, por exemplo, referenciar um container a partir de outro, utilizando seu nome. Vamos ver um vídeo que exemplifica isso:

Ou seja, conseguimos criar nossas próprias redes utilizando:
Copiar
docker network create -d bridge minha-rede
Para vincularmos nosso container à rede criada durante sua execução, basta utilizarmos o parâmetro --network :
Copiar
docker container run \
    -itd \
    --network minha-rede \
     --name meu-container \
     busybox
Agora, note a rede minha-rede e o driver bridge :
Copiar
docker network ls
Para conectarmos um container já criado, basta utilizarmos o parâmetro connect :
Copiar
docker network connect minha-rede meu-container
E para desconectá-lo, basta utilizar o parâmetro disconnect :
Copiar
docker network disconnect minha-rede meu-container
Importante lembrarmos que drivers e networks são objetos diferentes. Uma rede é associada a um ou nenhum driver , as redes padrões que mencionamos acima, possuem o mesmo nome de seu driver, porém não confunda. Por exemplo, a rede bridge possui o driver bridge e, quando ao criarmos nossa própria rede, também utilizamos esse driver, porém não há relação com a rede padrão de nome bridge , no caso não estaremos utilizando ela.
Da mesma forma acontece com a rede host , já a rede none não possui um driver e, por isso, ao associarmos um container a ela, ele fica isolado.

--- Anotacões fornecidas pelo Matheus ---

Conectando containers numa mesma rede
Criando uma rede
docker network create -d bridge trybe-network 

Iniciando 2 containers
docker run -itd —name container1 busybox
docker run -itd —name container2 busybox

Conectando os containers numa mesma rede 
docker network connect trybe-network container1
docker network connect trybe-network container2

Conectando os containers já criados de forma interativa
docker exec -it container1 /bin/sh (cada um em uma nova aba)
docker exec -it container2 /bin/sh

Testando o Ping em cada um dos containers
ping container1
ping container2


Verificando quais containers estão conectados a uma rede
docker network inspect trybe-network

Criando um container e já adicionando ele na rede criada
docker run -itd --name container3 --network trybe-network busybox

Desconectando de uma rede
docker network disconnect trybe-network container3

Volumes - Mapeando pastas para utilização em containers
O que sabemos até o momento é que se removermos um container , todos os dados que manipulamos sobre ele também serão removidos. Isso acontece porque estamos escrevendo na camada criada pelo container e que permite leitura e escrita.
Mas existe uma a possibilidade de persistir os dados em um container , que é a utilização de volumes !
Utilizar um volume significa mapear uma pasta do nosso Sistema Hospedeiro ( Docker Host ), para o Sistema Convidado (o container ).
Assim, ela é vinculada ao container e mesmo que esse container seja removido, essa pasta permanecerá. Isso faz com que os dados não sejam perdidos.
Utilizando um exemplo com o Apache , pense na seguinte situação: Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache , que não está instalado em nossa máquina.
Assim, a medida que formos desenvolvendo nossa página HTML , precisamos que o nosso ambiente de desenvolvimento permaneça no container .
Para isso, a primeira coisa que vamos fazer é criar a seguinte página HTML :
Copiar
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Estou começando minha primeira página em HTML.</p>
   </body>
</html>
Salve o arquivo com o seguinte nome e extensão primeiro-teste.html em alguma pasta local de fácil acesso*.
* Aqui usaremos o caminho /home/trybe/meu-site .
Agora vamos criar um container , que manterá um volume vinculado a essa nossa pasta local, para que qualquer alteração que fizermos em nosso HTML seja refletida no servidor http em nosso container .
Para isso, vamos usar no comando run , o parâmetro -v (de 'volume') da forma -v <PASTA-LOCAL>:<PASTA-CONTAINER> :
Copiar
docker run -d --name site-trybe2 -p 8881:80 -v "/home/trybe/meu-site/:/usr/local/apache2/htdocs/" httpd:2.4
Vamos entender esse comando que acabamos de executar nos concentrando na flag -v .
Essa flag cria um volume e é seguida pelo endereço do diretório em nossa máquina /home/trybe/meu-site/ acompanhada do endereço no diretório do servidor /usr/local/apache2/htdocs/ *, ao qual será vinculado.
* Esse diretório é específico para armazenar os arquivos que vão ser acessados no servidor http Apache e pode ser diferente, caso você opte por usar outro aplicativo.
Dessa forma qualquer modificação que realizarmos no arquivo HTML em nossa máquina local será refletido pelo container, no endereço da pasta do nosso servidor apache.
Agora acesse o site mantido pelo servidor Apache acessando o endereço http://localhost:8881/primeiro-teste.html no navegador e lá estará o aquivo HTML que você acabou de criar.
Vamos fazer um teste! Acesse novamente o arquivo primeiro-teste.html que a acabamos de criar e edite-o da seguinte forma:
Copiar
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker, que maravilha!</h1>
      <p>Estou começando minha primeira página em HTML e estou muito feliz! #VQV</p>
   </body>
</html>
Salve seu arquivo e recarregue sua página no browser.
O que podemos concluir com isso? Podemos criar um ambiente de desenvolvimento baseado apenas no uso de containers , o que facilita bastante o trabalho dos times de desenvolvimento, já que o volume pode ser compartilhado entre o time, e acessado via diferentes containers .
Da mesma forma, tendo um volume na sua máquina, você pode utilizar outros containers sem perder seus arquivos!
Com o uso do volume, mesmo que o container seja excluído, o volume será mantido. Isso quer dizer que tudo que colocarmos na pasta /usr/local/apache2/htdocs/ , do container , ficará preservado na pasta /home/trybe/meu-site em nossa máquina.
Para verificarmos se essa afirmativa é verdadeira, faça o seguinte.
Copiar
docker inspect site-trybe2 #que é o nome que demos ao nosso container
Teremos uma saída com muitas informações, mas o mais importante nesse momento é o "Mounts" que nos mostra através da propriedade Source onde está o volume desse container em nosso Docker Host .
Copiar
"Mounts": [
   {
      "Type": "bind",
      "Source": "/home/trybe/meu-site",
      "Destination": "/usr/local/apache2/htdocs",
      "Mode": "",
      "RW": true,
      "Propagation": "rprivate"
   }
]
Bem, agora que confirmamos que temos um volume criado em nosso Docker Host faremos a exclusão de nosso container e verificaremos se junto com o container nossa pasta /home/trybe/meu-site também será excluída.
Para isso, em posse do id do nosso container primeiro precisamos pará-lo com o comando:
Copiar
docker stop site-trybe2
Agora que paramos o nosso container, vamos excluí-lo com o comando:
Copiar
docker rm site-trybe2
Agora vamos verificar se a pasta onde salvamos nosso arquivo html permanece no mesmo lugar ou foi removida junto com o container:
Copiar
cd /home/trybe/meu-site && \
ls -la
Isso deve retornar a lista de arquivos na pasta, algo como:
Copiar
drwxrwxr-x 1 trybe trybe   38 set 22 17:37 .
drwxr-xr-x 1 trybe trybe 1236 set 22 17:33 ..
-rw-rw-r-- 1 trybe trybe  354 set 22 17:43 primeiro-teste.html
E voilà! Nosso arquivo primeiro-teste.html permanece intacto.
Agora, pra reforçar um pouco mais seus conhecimentos sobre volumes , veja o vídeo abaixo sobre quando e como utiliza-los:

Também é possível especificar os volumes da nossa imagem no nosso Dockerfile . Para isso, basta utilizarmos o comando VOLUME e então, caso não especifiquemos outros comportamentos para o container , será criado o ponto de montagem especificado.
A sintaxe em nosso Dockerfile é bem simples, basta especificarmos qual diretório será utilizado como volume por nossa imagem:
Copiar
VOLUME ["/data"]
⚠️ Importante: Toda vez que criarmos um container que mapeia um volume, ele alocará espaço para esse volume no seu sistema .
Por tanto, é sempre importante verificar seus volumes utilizando docker volume ls e remover aqueles que você não utiliza, seja com o comando docker volume rm <VOLUME NAME> , seja com docker volume prune (⚠️ esse comando remove todos os volumes que não estão sendo utilizados por containers) ;
Também é possível remover volumes automaticamente ao remover containers , utilizando o comando docker container rm -v <CONTAINER ID || NAMES> , onde o -v indica para o docker, que o volume associado ao container também deve ser removido.

O que é o Docker Compose?
Anteriormente, aprendemos e utilizamos o Dockerfile para criar nossas imagens, de maneira unitária, ou seja, especificávamos as definições de uma determinada imagem. Tínhamos uma imagem para cada "tipo" de container , por exemplo, um container para nosso app , outro para nosso frontend , outro para nosso banco de dados e assim por diante.
Com o Docker Compose , criamos a especificação de todo o ambiente. Por exemplo, definimos quais containers irão rodar e a partir de qual imagem eles serão criados. Se for a partir de um código local podemos ainda configurar para que ele crie a imagem para a gente a partir do Dockerfile . Repare que um não exclui o outro, pelo contrário, o arquivo do Compose irá trabalhar juntamente com o Dockerfile .
* Conforme o artigo do Docker Labs , um Dockerfile é um arquivo de texto simples que contém os comandos que um usuário pode chamar para montar uma imagem, enquanto o Docker Compose é uma ferramenta para definir e executar aplicativos Docker de vários containers .
O Docker Compose é um orquestrador de containers, uma ferramenta para definir e rodar aplicações multi-containers Docker . Com ele, podemos automatizar a implantação e gerenciamento dos containers .
Assim como uma receita, o Compose indica os ingredientes (componentes) e o modo de preparo (ordem de execução), pelos quais conseguimos subir todo nosso ambiente executando apenas um comando, facilitando a execução de um conjunto de containers .
Para isso, usamos um único arquivo YAML com todos os detalhes e especificações para "subirmos" todos os serviços de um ambiente em uma certa ordem pré-determinada, sem a necessidade de subir cada um dos containers que compõe a aplicação com seus parâmetros específicos no run .

Instalação
Para instalar o Docker Compose é bem simples, mas antes certifique-se que você já possui a Docker Engine ou o Docker Desktop instalado, conforme fizemos na primeira aula de Docker .
Se você estiver utilizando Windows ou Mac , o Docker Compose já é instalado junto com o Docker Desktop . Caso esteja utilizando alguma distro Linux , basta utilizar o seguinte comando para realizar a instalação:
Copiar
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
Feito isso, basta aplicar a permissão de execução ao binário:
Copiar
sudo chmod +x /usr/local/bin/docker-compose
E se tudo ocorrer bem, para validar a instalação basta executar o seguinte comando:
Copiar
docker-compose --version
Devem ser exibidos os detalhes da versão instalada em seu terminal, para mais detalhes ou caso ocorra algum erro, consulte o guia oficial .

Compose File - Parte I
Resumidamente, o arquivo Docker Compose é onde conseguimos especificar todos os parâmetros que antes rodávamos unitariamente utilizando docker container run , além de podermos também criar os demais objetos utilizados por eles, como redes e volumes .
Mapear todos os comandos e estruturá-los em um único arquivo tem diversas vantagens. Uma delas, especialmente vantajosa quando estamos trabalhando com muitos containers , é evitar ter que sempre digitar inúmeros parâmetros em linha de comando com o run . Além disso, utilizar o Docker Compose torna mais fácil editar configurações e automatiza a execução de comandos.
Toda a configuração do Docker Compose é feita por meio de um arquivo YAML . O nome padrão que utilizamos é docker-compose.yaml , porém, pode ser utilizado qualquer outro nome de nossa escolha.
Copiar
version: "<VERSÃO-DO-COMPOSE>"
services: # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
Vamos ver agora, detalhadamente, como utilizar os principais parâmetros e rodar nossas aplicações utilizando o Compose .
Version
Todo arquivo docker-compose.yaml deve iniciar com a tag version , dessa maneira definimos qual a versão que deverá ser utilizada pelo compose para interpretar o arquivo, evitando assim que o docker-compose.yaml fique incompatível com versões mais recentes do compose .
Você pode consultar as especificações de cada versão aqui .
Utilizaremos a versão 3 do compose , sendo assim, nosso yaml iniciará da seguinte maneira:
Copiar
version: '3'
Services
Para o Compose , há o conceito de services , que são os "tipos" dos containers que iremos rodar. Por exemplo, se vamos executar uma API , dizemos que ela é um service . Isso porque com o Compose , podemos escalar nossos apps em vários containers .
Podemos, por exemplo, escalar nossa API em 4 containers diferentes, de forma que teremos um service que é a nossa API , porém com 4 containers em execução.
Dessa forma, ao escrevermos nosso arquivo, temos que pensar em services , pois é assim que iremos defini-los. Vamos a um exemplo! Imagine que queremos subir uma aplicação que contém um front-end, um back-end e um banco de dados. Dessa forma, não precisamos ainda pensar em quantos containers teremos, porém, podemos dizer que temos 3 services . Para definir nossos services , utilizamos o parâmetro services . Vamos ver como ficaria esse exemplo em nosso arquivo Compose :
Copiar
version: '3'
services:
  frontend::

  backend:

  database:
Perceba que aqui apenas demos um nome aos nosso serviços, porém não especificamos o que deverá ser executado ainda. Lembre-se que todo container é criado a partir de uma imagem , sendo assim, precisamos especificá-las aos nossos serviços. Para isso, podemos utilizar dois comandos: image para especificar uma imagem, seja local ou a ser baixada no Docker Hub , ou build , para apontar um diretório com o Dockerfile a partir do qual o Compose irá buildar a imagem para nós.
Em nosso exemplo, construiremos as três partes da aplicação a partir dessas imagens disponíveis no Docker Hub . Portanto, usaremos sempre o comando image para especificar cada uma delas. Nosso docker-compose.yaml ficaria assim:
Copiar
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
Nosso arquivo irá funcionar como se estivéssemos executando três docker container run , um para cada serviço. Sendo assim, precisamos definir os demais parâmetros para os nossos containers .
Restart
No Docker , existem as políticas de reinicialização, que servem para gerenciar se seus containers reiniciarão automaticamente quando o docker for reiniciado ou quando ocorrer algum erro, por exemplo.
Este comando pode assumir quatro valores:
no - Este é o valor padrão assumido pelo Docker e define que o container não irá restartar automaticamente;
on-failure - Define que o container será reiniciado caso ocorra alguma falha, apontado pelo exit code diferente de zero;
always - Especifica que sempre que o serviço parar, seja por um falha ou porque ele finalizou sua execução, ele irá ser reiniciado; *
unless-stopped - Define que o container sempre seja reiniciado, a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem depois que o daemon do Docker * seja reiniciado.
* Caso o container seja interrompido manualmente, ele só será reiniciado depois que o daemon do Docker for reiniciado ou que o próprio container seja reiniciado manualmente. Esse é um mecanismo pra evitar loops .
O daemon do Docker é um processo que contínuo e que roda em segundo plano, que gerencia os containers Docker em um host .
É importante utilizarmos o parâmetro, principalmente quando utilizarmos o Docker Compose em ambiente de produção, conforme é recomendado pelas especificações da própria documentação.
Com a adição dessa configuração, nosso exemplo ficará assim:
Copiar
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
Ports
Uma configuração importante é a porta. Vimos nos conteúdos anteriores como expor e fazer bind delas em nossos containers . No docker-compose.yaml temos o parâmetro ports que se comporta da mesma maneira que o -p do docker container run .
No nosso exemplo, queremos utilizar a porta 3000 para nosso front-end e a porta 3001 para nosso back-end, ambas fazendo bind para as respectivas portas no host . Dessa forma, nosso arquivo ficará assim:
Copiar
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
Lembre-se sempre: o primeiro parâmetro é a porta do host e o segundo a porta exposta no container .
Environment
Outro parâmetro importante é o environment . Com ele, conseguimos configurar as variáveis de ambiente de nossos containers .
Imagine que em nosso exemplo, precisamos passar para nosso back-end uma parte da URL onde o banco de dados irá rodar, em uma variável chamada DB_HOST . Nosso exemplo ficaria assim:
Copiar
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
Perceba que estamos passando a variável "DB HOST" que está em nosso _host , para a variável "DB HOST" do _container , onde o back-end está esperando pela variável. Lembre-se que mesmo tendo a env configurada em seu ambiente, ela só será passada ao container se especificada aqui, da mesma maneira como fazemos com o parâmetro -e ou --env no comando run .
Simples não?
Aqui também é possível utilizar variáveis de ambiente. Por exemplo, imagine que temos uma variável API_SECRET com uma secret . Por se tratar de um dado sensível, não podemos colocá-lo em um arquivo a ser versionado como parte de nossa aplicação, porém ainda temos que especificar ao Compose qual variável irá ser passada para qual container .
* No contexto de Docker, secret é um dado que não deve ser transmitido por uma rede ou armazenado sem criptografia em um Dockerfile ou no código fonte de sua aplicação, como uma senha ou uma chave privada SSH, por exemplo.
Vamos ver como ficaria esse exemplo:
Você pode dar uma olhada mais detalhada em variáveis de ambiente usando docker-compose nesse link
Depends On
Outro parâmetro importante para garantir a ordem de inicialização e encerramento de services é o depends_on . Com ele, conseguimos estabelecer dependências entre os serviços.
Para entendermos melhor os comportamentos dessa flag , vamos voltar para a aplicação que estamos construindo como exemplo:
Copiar
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
Nesse exemplo, os services serão iniciados respeitando a ordem das dependências, portanto, o database será iniciado antes do backend , que será startado antes do frontend .

Gerenciando Services
Antes de seguirmos para os próximos comandos do Compose , vamos aprender alguns comandos de execução do arquivo docker-compose.yaml para ver na prática algumas implicações do que já aprendemos até aqui.
Up
Ao rodar o comando docker-compose up , o Compose irá executar todos os containers especificados, baixando as imagens do repositório ou buildando localmente a partir do Dockerfile , de acordo com o que foi especificado no arquivo. Outro detalhe importante é que, nesse momento, além de executar os containers , o Compose irá criar os demais objetos especificados, como redes e volumes.
Da mesma forma como rodamos os containers no modo daemon , podemos fazê-lo no docker-compose up utilizando o parâmetro -d .
O parâmetro -f também pode ser utilizado, caso você tenha dado um nome diferente do padrão para o seu arquivo Compose . Se seu arquivo possuir o nome padrão docker-compose.yaml , não é necessário passar a essa flag , apenas lembre-se de estar no mesmo diretório que o arquivo.
Caso você utilize a opção -f , lembre-se que ela pertence ao comando docker-compose , sendo assim, ela precisa ser passada logo após ele. Por exemplo: docker-compose -f meu-arquivo-compose.yaml up ou docker-compose -f meu-arquivo-compose.yml stop . A sintaxe docker-compose <COMMAND> -f não funcionará .
Se você está construiu localmente um arquivo docker-compose.yaml como o do exemplo que desenvolvemos até aqui, tente entrar no diretório em que está o arquivo e executar os services utilizando o o comando:
Copiar
docker-compose up
Podemos também usar este comando especificando um service .
Copiar
docker-compose up <SERVICE NAME>
Se fizermos isso, o Compose irá incluir também suas dependências. Por exemplo, seguindo com nosso arquivo docker-compose.yaml de, se rodarmos o comando:
Copiar
docker-compose backend
O Compose também irá criar e startar o database , que definimos no docker-compose.yaml como dependência do service backend , por meio do parâmetro depends_on .
Caso você use o parâmetro build (que recebe o caminho do _Dockerfile da sua aplicação) ao invés de image , o _Compose irá buildar a imagem se isso não tiver sido feito anteriormente.
Nesse sentido, outro parâmetro importante para conhecermos e muito usual é o --build . Perceba que, uma vez que a imagem seja buildada pelo Compose , na próxima vez que executarmos o up , ele utilizará essa imagem já criada, sem atualizá-la.
Para forçamos um novo build , podemos utilizar a tag --build especificando um service ou não (dessa maneira ele irá tentar buildar todas as imagens possíveis novamente).
Copiar
docker-compose up --build <SERVICE NAME>
É muito comum utilizarmos o --build durante o desenvolvimento, pois quando fazemos alguma alteração e queremos refleti-la em nosso ambiente Compose , precisamos rebuildar a imagem do service alterado para que as atualizações sejam aplicadas ao ambiente.
⚠️ Lembre-se que para os comandos Compose , quando não especificado um arquivo com -f , a ferramenta irá buscar pelo arquivo docker-compose.yaml no diretório atual.
Down
Se quisermos parar nossos services , podemos utilizar o comando down . Com ele, todos os containers irão ser parados e os objetos criados pelo up , como as redes, por exemplo, serão removidos.
Copiar
docker-compose down
Não precisa se preocupar com remoção das redes e dos apontamentos que o comando causará, pois ao rodar o up novamente, tudo será recriado.
Ps
Semelhante ao comando com containers , podemos utilizar o parâmetro ps para listar os containers ativos. Porém, a grande diferença é que só serão listados os containers pertencentes ao arquivo do Compose referenciado (seja utilizando a flag -f ou utilizando o nome de arquivo padrão).
Copiar
docker-compose ps
Stop
Com o comando stop , conseguimos parar os services e, consequentemente, todos os containers relacionados. Diferentemente do down , ele não irá remover as redes e outros objetos criados pelo up .
Copiar
docker-compose stop
Lembre-se que podemos especificar um service a ser parado, para isso basta utilizarmos o nome que definimos no arquivo Compose .
Copiar
docker-compose stop <SERVICE NAME>
De maneira semelhante ao que ocorre com o docker-compose up quando especificamos um service , ao especificarmos um service no o docker-compose stop , ele irá parar os serviços respeitando as dependências.
Em nosso exemplo, o backend será parado antes do database , ao executarmos o comando:
Copiar
docker-compose stop backend
Start
O start funciona de maneira análoga ao stop . Com ele, podemos startar os services parados referentes àquele arquivo Compose .
Copiar
docker-compose start
Também de maneira semelhante ao stop , podemos especificar um service para ser startado utilizando o nome dele.
Logs
Outro comando bem interessante é o logs . Com ele, podemos ver os logs de nossos services de maneira semelhante como fazemos unitariamente com os containers . Aqui podemos especificar um service para visualizar os logs de todos os seus containers , ou ver todos os logs daquele ambiente, conforme arquivo do Compose .
De maneira similar também ao comando para containers , podemos utilizar a flag -f ou --follow para acompanhar em tempo real as saídas dos containers e o --tail , em que podemos definir o número de linhas para ser exibidos a partir do final dos logs .
Copiar
docker-compose logs -f --tail=100 <SERVICE NAME>

Compose File - Parte II
Volumes
Assim como aprendemos a utilizar volumes executando nossos containers de maneira individual, conseguimos também utilizar volumes por meio do nosso arquivo compose .
Podemos definir nossos volumes da mesma maneira que fazemos com o comando docker container run , tanto como bind como da forma nomeada.
Podemos utilizar a forma mais extensa dele também, por exemplo:
Copiar
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
Networks
Conforme vimos na seção Networks , nossos containers precisam estar na mesma rede para conseguir se comunicar utilizando o name .
Utilizando o Docker Compose , isso já é realizado de maneira padrão. Ao iniciar um novo arquivo, será criada uma rede padrão (bridge) para comunicação de todos os serviços especificados nele, dessa forma conseguimos facilmente comunicar todos os services de nosso ambiente. Quando executamos nosso arquivo de exemplo, você pode ter notado que o início do log é justamente a criação de uma rede padrão, algo similar a imagem a seguir:

Criação de network padrão a partir do Compose
⚠️ Lembre-se que se apontarmos para o localhost:3000 simplesmente, nosso container irá acessar a sua própria porta 3000 e não irá encontrar nada, pois o banco está em outro serviço. Por isso, devemos sempre utilizar, caso o serviço esteja em outro container , o nome dele.
Porém, ainda podemos criar nossas próprias redes customizadas, caso faça sentido para nossa arquitetura, por exemplo, quando queremos isolar os serviços.
Para isso, basta utilizar a opção networks em nossos serviços, definindo uma rede para um serviço específico e, ao final do arquivo, de forma semelhante ao volume, definimos as redes a serem criadas. A sintaxe básica é a seguinte:
Copiar
version: "<VERSÃO-DO-COMPOSE>"
services:
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO>
    networks:
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE>
    networks:
      - <NETWORK-1>
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações

networks:
  <NETWORK-1>:
Agora, vamos a um exemplo! Imagine que temos um ambiente com 3 services , sendo um front-end e dois back-ends, mais um banco de dados. Nessa arquitetura, apenas os back-ends acessam o banco de dados e o front-end acessa os back-ends. Para criarmos esses isolamentos, nosso YAML ficaria semelhante ao exemplo abaixo:
Copiar
version: '3'

services:
  frontend-a:
    build: ./frontend_a
    networks:
      - frontend

  backend-a:
    build: ./backend_a
    networks:
      - backend
      - frontend

  backend-b:
    build: ./backend_b
    networks:
      - backend
      - frontend

  db:
    image: mysql
    networks:
      - backend

networks:
  frontend:
  backend:
Acompanhe o vídeo abaixo, onde demonstramos a criação de um docker-compose na prática:

Bônus: Tópicos extras sobre Docker
Alguns tópicos podem agregar no seu entendimento sobre a utilização do Docker. Termos como microsserviços , escalabilidade e interação com o Registry são muito utilizados por quem trabalha frequentemente utilizando containerização .
Esses (e outros) tópicos são melhor abordados no conteúdo bônus: Tópicos extras sobre Docker que está disponível na área de Desenvolvimento Web: Vida Real no course.
Bora conferir? 👩‍💻
