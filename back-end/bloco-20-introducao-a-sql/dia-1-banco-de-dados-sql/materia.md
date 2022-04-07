O que é SQL?
SQL é a linguagem usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional. Para que isso seja possível, existem comandos como o SELECT, UPDATE, DELETE, INSERT e WHERE, entre outros, que você aprenderá ao longo do curso.

Como essas informações (tabelas) são armazenadas?
Todas as pesquisas realizadas dentro de um banco de dados são feitas em tabelas. Tabelas possuem linhas e colunas. Linhas representam um exemplo, ou instância, daquilo que se deseja representar, ao passo que colunas descrevem algum aspecto da entidade representada.
Por exemplo, a imagem a seguir apresenta uma tabela com dados sobre pessoas. Cada linha na tabela representa uma pessoa específica. As colunas descrevem uma característica que queremos armazenar sobre as pessoas; nesse caso, são nome, sobrenome e email.

Ilustração de linhas e colunas em uma tabela

Constraints (restrições), chaves primárias e chaves estrangeiras
Uma das grandes vantagens de armazenar seus dados em um banco de dados é de possibilitar a criação de regras e restrições ( constraints , em inglês), que ditam exatamente como os dados podem ou não ser manipulados em suas tabelas. Vamos ver um resumo de como isso funciona:

Como as constraints são aplicadas às colunas das tabelas, é possível assegurar que os dados inseridos nelas serão consistentes conforme as regras definidas . São constraints :
NOT NULL - Garante que aquele campo não pode conter valores nulos , ou seja, se não houver um valor padrão ( DEFAULT ) definido, será sempre necessário passar um valor para esse campo durante um INSERT , por exemplo.
UNIQUE - Garante que o valor inserido na coluna da tabela é único , isto é, não pode haver outro valor igual para esta coluna registrado nesta tabela.
PRIMARY KEY - A chave primária de uma tabela garante que a coluna em que essa constraint está sendo aplicada é o identificador único da tabela . Ela também é, por definição, não nula (mesmo efeito da constraint NOT NULL ) e única (mesmo efeito da constraint UNIQUE ).
FOREIGN KEY - A chave estrangeira de uma tabela faz referência a uma chave primária (valor em uma coluna com a constraint PRIMARY KEY ) de outra tabela , permitindo um relacionamento entre as duas.
DEFAULT - Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão que for passado para ela .
Assim, durante a criação de uma tabela, ao se pensar em suas colunas, podemos avaliar quais constraints podemos aplicar àquela informação. Por exemplo, imagine uma tabela que liste os sabores de sorvete de uma sorveteria. Nessa tabela, temos três colunas: um código identificador, o nome do sabor do sorvete e o código identificador de quem fornece. Vamos ver cada coluna e pensar em quais constraints podemos adicionar a elas:
Código identificador (id) - Para o id do sorvete, precisamos que ele identifique e represente o sabor do sorvete na tabela, então podemos adicionar como constraint a PRIMARY KEY .
Nome - Aqui, queremos que os valores sejam únicos, afinal, não temos a necessidade de cadastrar um novo sabor de sorvete que já conste na tabela. Além disso, queremos que, ao cadastrar, o valor não seja nulo. Então, como constraints , podemos adicionar UNIQUE e NOT NULL .
Código identificador de quem fornece (id) - Suponha que já possuímos uma tabela onde listamos todas as empresas fornecedoras, e que nessa tabela, os valores estão sendo representados por uma primary key . Então, podemos atribuir como constraint a FOREIGN KEY .
Exercícios de fixação
Então, depois de ter visto o conteúdo acima, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:

Conteúdo da tabela address
Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:
Quais constraints a coluna address_id poderia ter? Por quê?
A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?
A coluna address (endereço) possui uma constraint . Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
Temos aqui uma outra tabela:

Conteúdo da tabela `city`
Que tipo de constraint a coluna city_id possui?
Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?
Na tabela a seguir:

Conteúdo da tabela `film`
Qual coluna possui uma primary key ?
Qual coluna possui uma foreign key ?

O que é uma entidade?
Quando se fala de entidades de um banco de dados, estamos normalmente falando de uma tabela que representa algum conceito do mundo real que você quer descrever (pessoa, eventos, acontecimentos) e suas propriedades (altura, horário do evento, nome do acontecimento). A entidade pessoa , por exemplo, pode ter as propriedades de altura, peso e idade. Uma entidade festa pode possuir as propriedades horário do evento, público-alvo e data da festa. Por fim, uma entidade venda pode possuir as propriedades valor da venda, dia da venda, produto vendido etc.
Entidade : Pessoa
Propriedades : Altura, peso, idade.
A entidade é nossa tabela dentro de um banco de dados e as propriedades fazem parte dessa tabela.
Em alguns desses casos, as entidades são individuais e não se relacionam entre si, porém às vezes elas são ligadas umas com as outras através de relacionamentos. Vamos ver mais sobre isso a seguir.

Como os dados são ligados?
Existem quatro tipos de relacionamento em um banco de dados.
Um para Um
Uma linha da Tabela A só deve possuir uma linha correspondente na tabela B ou vice-versa.

Exemplo de relacionamento um para um
Na imagem acima, um empregado só pode estar relacionado a um pagamento, e um pagamento deve estar relacionado a apenas um empregado.
Apesar de ser possível inserir essas informações em apenas uma tabela, esse tipo de relacionamento é usado normalmente quando se quer dividir as informações de uma tabela maior em tabelas menores por questões de performance, a fim de evitar tabelas com dezenas de colunas, ou por várias outras questões específicas de um negócio. Pode ser encontrado em alguns conteúdos com a abreviação: 1:1 (um para um) .
Um para Muitos ou Muitos para Um
Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na tabela A pode ter várias linhas correspondentes na tabela B , mas uma linha da tabela B só pode possuir uma linha correspondente na tabela A .

Exemplo de relacionamento um para muitos ou muitos para um
Na imagem acima, uma categoria pode estar ligada a vários livros; porém um livro deve possuir apenas uma categoria. Pode ser encontrado em alguns conteúdos com a abreviação: N:1 (muitos para um) ou 1:N (um para muitos) dependendo da regra de negócio.
Muitos para Muitos
O tipo de relacionamento muitos para muitos acontece quando uma linha na tabela A pode possuir muitas linhas correspondentes na tabela B e vice-versa.

Exemplo de relacionamento muitos para muitos
O relacionamento muitos para muitos pode ser visto também como dois relacionamentos um para muitos ligados por uma tabela intermediária, como é o caso da tabela filme_ator do banco sakila . Podemos chamar essa tabela intermediária de tabela de junção. Ela é usada para guardar informações de como as tabelas se relacionam entre si.
Dessa maneira, quando queremos demostrar que um filme pode contar com vários atores, e também que os atores podem atuar em vários filmes, surge a necessidade de um relacionamento muitos para muitos. Pode ser encontrado em alguns conteúdos com a abreviação: N:N (muitos para muitos) .
Vamos ver alguns outros exemplos no vídeo abaixo:

Agora a prática
Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila , que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench , sua missão agora é tentar finalizar os exercícios a seguir!
Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;
Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
