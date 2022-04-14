Como transformar uma ideia em um banco de dados?
Uma ideia que eventualmente será transformada em um banco de dados começa com uma história ou problema a ser resolvido. É isso que será coberto hoje: um cenário fictício que precisa ser resolvido e como ir da idealização para a sua solução.

Como transformar uma ideia em um banco de dados?
Uma ideia que eventualmente será transformada em um banco de dados começa com uma história ou problema a ser resolvido. É isso que será coberto hoje: um cenário fictício que precisa ser resolvido e como ir da idealização para a sua solução.

O problema - Catálogo de Álbuns
Suponha que seja necessário armazenar informações de álbuns musicais para formar um catálogo. Para isso seria criado um banco de dados, e nesse banco de dados teríamos o que chamamos de tabela. Pensando em nosso exemplo, poderíamos ter uma tabela chamada albuns_musicais , onde as informações de cada álbum a serem armazenadas na respectiva tabela seriam:
Título;
Preço;
Estilo Musical;
Canções.
Poderíamos também, dentro do mesmo banco de dados, ter outra tabela que armazenaria informações do artista, visto que cada artista pode produzir vários álbuns, criando assim um relacionamento entre tabelas (Veremos isso mais a frente, em outro momento).


Database Design - Como modelar um banco de dados
Existem alguns passos a serem seguidos durante a modelagem e criação de um banco de dados. Um fluxo bastante comum nesse processo consiste em:
Identificar as entidades , atributos e relacionamentos com base na descrição do problema;
Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1;
Criar um banco de dados para conter suas tabelas;
Criar e modelar tabelas tendo o diagrama do passo 2 como base.
A seguir você verá como realizar cada um desses passos.
1) Identificando entidades, atributos e relacionamentos
Primeiramente você deve identificar as entidades , atributos e relacionamentos com base na descrição do problema. Porém, antes disso é necessário entender o significado de cada um deles.
Entidades:
São uma representação de algo do mundo real dentro do banco de dados. Elas normalmente englobam toda uma ideia e são armazenadas em formato de tabelas em um banco de dados.
Antes de expandir o código a seguir: Volte à descrição do problema acima e busque identificar quais objetos devem se tornar entidades. Depois expanda o código abaixo para verificar.
Ver entidades
Atributos:
Os atributos são tudo aquilo que pode ser usado para descrever algo. Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade.
Antes de expandir o código a seguir: Considerando a história anterior sobre um catálogo de álbuns musicais, tente deduzir quais propriedades descrevem cada uma das entidades encontradas anteriormente.
Ver atributos
Relacionamentos:
Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, que são:
Relacionamento Um para Um (1..1):
Nesse tipo de relacionamento, uma linha da Tabela A deve possuir apenas uma linha correspondente na Tabela B e vice-versa. Veja o exemplo abaixo:

Exemplo de relacionamento um para um
Apesar de ser possível inserir essas informações em apenas uma tabela, esse tipo de relacionamento é usado normalmente quando se quer dividir as informações de uma tabela maior em tabelas menores, evitando que as tabelas tenham dezenas de colunas.
Relacionamento Um para Muitos ou Muitos para Um (1..N):
Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na Tabela A pode ter várias linhas correspondentes na Tabela B , mas uma linha da Tabela B só pode possuir uma linha correspondente na Tabela A . Veja o exemplo abaixo:

Exemplo de relacionamento um para muitos ou muitos para um
Nesse exemplo, uma categoria pode estar ligada a vários livros, embora um livro deva possuir apenas uma categoria.
Relacionamento Muitos para Muitos (N..N):
O relacionamento muitos para muitos acontece quando uma linha na Tabela A pode possuir muitas linhas correspondentes na Tabela B e vice-versa. Veja o exemplo abaixo:

Exemplo de relacionamento muitos para muitos
Esse tipo de relacionamento pode ser visto também como dois relacionamentos um para muitos ligados por uma tabela intermediária, como é o caso da tabela filme_ator . Pode-se chamar essa tabela intermediária de tabela de junção . Ela é usada para guardar informações de como as tabelas se relacionam entre si. Desta maneira, quando se quer demonstrar que um filme pode contar com vários atores e também que os atores podem atuar em vários filmes, surge a necessidade de um relacionamento muitos para muitos.
Antes de expandir o código a seguir: Volte à estrutura de tabelas do Catálogo de Álbuns e tente identificar quais tipos de relacionamentos existem entre as tabelas. Escreva-os em algum lugar e depois expanda abaixo para ver os relacionamentos. Praticar essa habilidade é crucial.
Ver Relacionamentos
2) Construindo um diagrama entidade-relacionamento
No segundo passo, será construído um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1.
Existem diversas ferramentas para modelar os relacionamentos em um banco de dados. Hoje será usada a draw.io para criar os modelos. Você pode aprender como utilizar essa ferramenta assistindo a este vídeo.
Agora é preciso montar um diagrama de relacionamento básico que demonstra como uma entidade é relacionada com a outra, usando o modelo EntidadeA + verbo + EntidadeB .
Considerando as entidades Álbum , Artista , Estilo Musical e Canção , foi construído o seguinte diagrama:

Relacionamento entre as entidades `Álbum`, `Artista`, `Estilo Musical` e `Canção`
O que você deve fazer quando estiver construindo seu próprio banco de dados é entender quantas vezes uma entidade pode se relacionar com uma outra, para, a partir disso, você poder criar esse primeiro diagrama, como o do exemplo acima, que mostra como as entidades estão relacionadas entre si.
Montando um diagrama mais detalhado
Para diagramas ER mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos.
Curiosidade: Por questão de convenções e boas práticas na criação de tabelas, não serão usados acentos ou espaços entre os nomes das tabelas.
Lembre-se: Existem várias maneiras de se modelar um banco de dados. Então, caso pense diferente do modelo abaixo, entenda que existem diversas formas de se resolver um mesmo problema.

Relacionamento detalhado entre as tabelas `Artista`, `Album`, `EstiloMusical` e `Cancao`
Relacionamentos presentes entre as tabelas acima:
Tabelas Artista e Album :
As tabelas Artista e Album possuem um relacionamento de um para muitos (1..N), em que um artista pode possuir um ou mais álbuns.

Tabelas `Artista` e `Album`
Tabelas Album e Cancao :
A tabela Album possui um relacionamento de um para muitos com a tabela Cancao , uma vez que um álbum pode conter várias canções.

Tabelas `Album` e `Cancao`
Tabelas Album e EstiloMusical :
A tabela EstiloMusical também possui um relacionamento de um para muitos com a tabela Album , uma vez que um estilo musical pode estar contido em vários álbuns.

Tabelas `Album` e `EstiloMusical`
Ponto importante sobre diagramas ER
A ideia de um diagrama ER é prover uma representação gráfica para a estrutura de seu banco de dados, descrevendo suas entidades com seus atributos e como elas se relacionam. Essa visualização pode te ajudar tanto a criar e modelar seu banco de dados quanto a entender se sua modelagem precisa ser alterada ou se houve algum erro ao pensar na organização de suas entidades. Com esse diagrama você consegue pensar um pouco mais antes de começar a escrever as queries para criar as tabelas.
Hora de voltar ao MySQL Workbench e criar um banco de dados!
3) Criando um banco de dados para conter suas tabelas
Agora que você já tem um diagrama que representa as tabelas que precisam ser criadas, já pode botar a mão no código.
Ao lidar com a criação e gerenciamento de um banco de dados, você precisará conhecer os seguintes comandos:
Copiar
-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- Sinônimo de CREATE DATABASE, também cria um banco de dados.
CREATE SCHEMA nome_do_banco_de_dados;

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;
Os comandos CREATE DATABASE ou CREATE SCHEMA fazem a mesma coisa, no entanto eles normalmente são utilizados em conjunto com o comando IF NOT EXISTS . Essa verificação é feita para evitar a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
Considerando o problema que precisa ser resolvido, hora de criar um banco de dados chamado albuns .
Copiar
CREATE DATABASE IF NOT EXISTS albuns;

Banco de dados `albuns` criado com sucesso
Como utilizar um banco de dados
Talvez você já tenha notado que, até agora, todas as queries têm sido prefixadas ou precedidas do nome do banco de dados, como, por exemplo:
Copiar
SELECT * FROM sakila.actor;
No entanto, pode-se usar também o comando USE nome_do_do_banco_de_dados , que define um banco de dados como ativo. Com ele, é eliminada a necessidade de utilizar nome do banco de dados como prefixo nas queries. Veja o exemplo a seguir:
Copiar
USE sakila;
SELECT * FROM actor;
Com o banco de dados albuns criado, resta apenas o quarto passo, pelo qual serão criadas as tabelas.
4) Criando e modelando tabelas de acordo com um diagrama ER
O objetivo para essa seção é criar as seguintes tabelas:

Relacionamento detalhado entre tabelas `Artista`, `Album`, `EstiloMusical` e `Cancao`
E para isso é necessário entender:
Quais são os principais tipos de dados no MySQL
Hora de assistir ao vídeo abaixo, para escolher melhor o tipo de dados durante a criação de uma tabela.

O que é uma primary key e foreign key
No vídeo abaixo você vai entender, em menos de 8 minutos, o que são primary key e foreign key.
Chave primária composta No vídeo vimos que a chave primária é uma restrição, ou constraint que serve para identificar uma linha e garantir que não haverá dados redundantes em uma tabela. Uma chave primária pode ser formada com uma única coluna ou um grupo de colunas de uma tabela . Ou seja, por mais que só possamos ter uma única chave primária por tabela, essa chave pode ser simples (apenas uma coluna) ou composta (conjunto de colunas).
Veremos um exemplo para ilustrar a utilização de uma chave primária composta, considere a seguinte tabela:
Copiar
    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        populacao INTEGER,
        CONSTRAINT PRIMARY KEY(cidade)
    );
Veja que foi criada uma chave primária simples utilizando o campo cidade . Agora considere o exemplo abaixo que irá inserir os dados das cidades de Rio Claro/SP e Rio Claro/RJ na tabela criada:
Copiar
    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
No exemplo acima teremos um erro , pois há uma violação da chave primária, já que o nome "Rio Claro" será duplicado e isto não é permitido. A solução para o problema acima é criarmos uma chave primária composta . A chave composta é aquela criada com duas ou mais colunas e, desta forma, passa a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade. Veja sua implementação no exemplo abaixo:
Copiar
    DROP SCHEMA IF EXISTS Brasil;
    CREATE SCHEMA Brasil;
    USE Brasil;

    CREATE TABLE cidades(
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(10) NOT NULL,
        populacao INTEGER,
        CONSTRAINT PRIMARY KEY(cidade, estado)
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
A escolha na utilização de chaves primárias simples ou compostas para criar sua tabela depende da situação. No exemplo acima, faz mais sentido criar um campo id e utilizá-lo como chave primária simples , assim fica mais fácil fazer os relacionamentos com outras tabelas e utilizar operadores de busca pois você usará apenas o campo id .
A criação da tabela cidades com uma chave composta foi puramente ilustrativa, para seguir o padrão de termos uma chave primária simples podemos mudar a query para fazer da seguinte forma.
Copiar
     -- Apagar a versão antiga da tabela
     DROP TABLE cidades;
     CREATE TABLE cidades(
       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
De qualquer forma, a aplicação de chaves compostas pode ser vantajosa em outras situações, como na criação de tabelas N:N, também conhecidas como tabelas de junção , pois os campos que contêm as chaves estrangeiras para as outras tabelas são utilizados para formar a chave primária composta , garantindo o bloqueio de registros com associações iguais. Veja no exemplo abaixo, a tabela de junção filme_ator .
Copiar


  

    
Tabela N:N

  


Neste caso, o recomendado é utilizar os campos AtorId e FilmeId já existentes para formar uma chave composta, desta maneira conseguimos manter a identificação única e a integridade da tabela sem precisar criar um novo campo único id para usar como chave primária.
Copiar
    CREATE TABLE filme_ator(
        AtorId INTEGER,
        FilmeId INTEGER,
        CONSTRAINT PRIMARY KEY(AtorId, FilmeId),
        FOREIGN KEY (AtorId) REFERENCES Actor (Atorid),
        FOREIGN KEY (FilmeId) REFERENCES Filme (Filmeid)
    );
Como criar uma tabela no MySQL
Hora de aprender como criar tabelas. Para isso criaremos as quatro tabelas do banco de dados albuns neste vídeo.


O que é a Normalização?
Os conceitos de normalização permitem que você aprofunde seus conhecimentos nas estruturas relacionais fundamentais, o que colabora para a tomada de decisões mais assertivas e seguras.
Essa confiança será importantíssima no momento de fazer modificações em estruturas de bancos de dados existentes ou criar novas estruturas do zero.
Para que você possa ter uma ideia do que é e de como funciona a normalização, assista ao vídeo abaixo:
Obs.: É recomendado assistir a todos os vídeos em sequência.

Assim, com essa informação, podemos começar a aprender sobre normalização com a Primeira Forma Normal .


1ª Forma Normal
Para iniciar a organização de um banco de dados, devemos nos atentar para a primeira forma normal - base de todas as outras. Seus preceitos são:
Colunas devem possuir apenas um valor
Valores em uma coluna devem ser do mesmo tipo de dados
Cada coluna deve possuir um nome único
A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados
Vamos descobrir se as estruturas que criamos estão dentro da Primeira Forma Normal ? Veja o vídeo a seguir:


2ª Forma Normal
Para a Segunda Forma Normal , devemos atentar para o seguinte:
A tabela deve estar na 1ª Forma Normal
A tabela não deve possuir dependências parciais.
Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir. Por exemplo, considere uma tabela Pessoa Estudantes que possui as seguintes colunas
id	nome	data_matricula	curso
1	Samuel	2020-09-01	Física
2	Joana	2020-08-15	Biologia
3	Taís	2020-07-14	Contabilidade
4	André	2020-06-12	Biologia
A coluna curso pode ser considerada uma dependência parcial pois poderiámos mover os valores dessa coluna para uma outra tabela e os dados dessa tabela podem existir independente de existir uma pessoa estudante vinculada a esse curso ou não. Dessa forma depois de normalizar teríamos duas tabelas:
Cursos
id	nome
1	Física
2	Biologia
3	Contabilidade
Pessoas Estudantes
id	nome	data_matricula	curso_id
1	Samuel	2020-09-01	1
2	Joana	2020-08-15	2
3	Taís	2020-07-14	3
4	André	2020-06-12	2
Dessa forma, aplicamos a segunda forma normal na tabela Pessoas Estudantes . Lembre-se que a função da normalização não é necessariamente reduzir o número de colunas mas remover redundâncias e possíveis anomalias de inclusão/alteração ou remoção.
Caso queira você também pode conferir como aplicar a segunda forma normal assistindo o vídeo a seguir:


3ª Forma Normal
Por fim, a Terceira Forma Normal estabelece que:
A tabela deve estar na 1ª e 2ª Formas Normais;
A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).
Para entender sobre a Terceira Forma Normal , assista ao seguinte vídeo:

Livros
livro_id	categoria_id	categoria	valor
1	1	Romance	29,90
2	2	Policial	34,90
3	3	Ficção	19,90
4	4	Ficção	44,90
Observando a tabela acima, podemos notar que a coluna categoria depende da coluna categoria_id , que não é a PK da tabela.
Quando um atributo (coluna) for dependente de outra coluna que não seja PK ou que não seja dependente unicamente da PK , como é o caso do exemplo acima, sua adequação à Terceira Forma Normal poderá se dar separando esse atributo em uma outra tabela. Dessa forma, ficaríamos com as tabelas assim:
Livros
livro_id	categoria_id	valor
1	1	29,90
2	2	34,90
3	3	19,90
4	4	44,90
categoria_id	categoria
1	Romance
2	Policial
3	Ficção
4	Ficção
Você pode conferir aqui um resumo dos pontos mencionados nos vídeos sobre cada uma das Formas Normais, bem como sua aplicação na prática.


Exercícios de fixação - normalização de dados
Vamos consolidar toda a explicação passada até o momento através de alguns desafios.
Exercício 1: Normalize a tabela a seguir para a 1ª Forma Normal.
Não se preocupe em montar a estrutura em código SQL neste primeiro momento. Crie apenas uma planilha (Excel, Google Sheets, Open Office Calc ou semelhantes) da estrutura esperada.
Funcionario_id	Nome	Sobrenome	Contato	Contato	DataCadastro	Setor
12	Joseph	Rodrigues	jo@gmail.com	(35)998552-1445	2020-05-05 08:50:25	Administração, Vendas
13	André	Freeman	andre1990@gmail.com	(47)99522-4996	5 de Fevereiro de 2020	Operacional
14	Cíntia	Duval	cindy@outlook.com	(33)99855-4669	2020-05-05 10:55:35	Estratégico, Vendas
15	Fernanda	Mendes	fernandamendes@yahoo.com	(33)99200-1556	2020-05-05 11:45:40	Marketing
Exercício 2: Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.
Exerício 3: Monte uma query que:
Crie um banco de dados chamado normalization ;
Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
Popule todas as tabelas com os dados fornecidos nos exercícios.
Hora de mexer os dedos
Após ter visto todo o processo de como sair de um problema e chegar até a criação de um banco de dados, é preciso um certo tempo para internalizar esse conteúdo. Com isso em mente, segue a proposta:
Com o intuito de te dar mais tempo para absorver o material de hoje, tente refazer o banco de dados albuns , caso já o tenha criado no decorrer da aula de hoje. Então, apague o banco de dados e recarregue a página para que as respostas sobre como criar o banco de dados e tabelas não estejam visíveis e expandidas.
Tente, com a ajuda do material de hoje:
Identificar as entidades, atributos e relacionamentos.
Criar o diagrama e o banco novamente por conta própria, sem olhar as respostas, que estão encapsuladas.

Blocos de respostas
É crucial que você tente chegar às suas próprias conclusões após assistir a este conteúdo. Somente assim você terá uma chance melhor de absorver esse material.


Bônus: Transformando ideias em um modelo de banco de dados - Parte 2
Alguns temas ficaram de fora, como VIEWs e o uso de INDEX . Esses e outros temas são melhor abordados no conteúdo Transformando ideias em um modelo de banco de dados - Parte 2 que está disponível na área de Desenvolvimento Web: Vida Real no course. Bora conferir? 👩‍💻

