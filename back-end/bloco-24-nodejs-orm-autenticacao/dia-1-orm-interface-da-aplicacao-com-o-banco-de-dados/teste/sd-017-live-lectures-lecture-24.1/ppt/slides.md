---
theme: 'night'
transition: 'slide'
title:  '24.1 ORM'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

## 24.1 - Sequelize - ORM

--

## 24.1 - Sequelize - ORM

> Vamos criar uma API para gestão de produtos e utilizaremos o Sequelize para gerenciar o banco de dados.

--

### Imagine a seguinte situação

> Há um time de 10 desenvolvedores, onde 8 deles se comunicam em inglês e outros dois em português.

--

### ### Imagine a seguinte situação

> Os que se comunicam em inglês precisam aprender a falar em português ou os que falam português precisam aprender a falar em inglês ou podemos colocar um interprete no meio ...

--

### Imagine a seguinte situação

> Agora imagina que, sua aplicação está toda escrita em JavaScript, mas você precisa em um pequeno espaço dela, conversar com o banco de dados.

--

### Imagine a seguinte situação

> O banco de dados não conversa em JavaScript e pra sua aplicação não precisar aprender e nem o banco de dados, vamos colocar um interprete.

--

### O interprete é o Sequelize

---

### Iniciando nossa Aplicação

- express 
- mysql2 
- sequelize
- dotenv

--

### Sequelize-cli

> O sequelize-cli libera comandos para serem executados no terminal.

```sh
$ npx sequelize-cli help
```

--


### Iniciando o Sequelize

```sh
$ npx sequelize-cli init
```

--

### Próximos passos

- O que foi criado?
  - Models
  - Config
  - Migrations
  - Seeders
- Iniciar o servidor Node

--

### Configurando nossas credenciais

--

### Models

> Os models são a essência do Sequelize. Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui (e seus tipos de dados).

--

### Gerando uma model

```sh
$ npx sequelize-cli model:generate --name Product --attributes name:string
```

--

### Entendendo Migrations

- A migration contém o código que irá de fato criar a nossa tabela.
- A migration precisa conter os mesmos atributos da Model e vice e versa.
- Possuímos o método de `Up` e `Down`.

--

### Executando uma `migration`

```sh
$ npx sequelize-cli db:migrate
```

--

### Criando uma migration pelo CLI

```sh
$ npx sequelize-cli migration:generate --name nomeDaMigration
```

--

### Extras sobre nosso DB

> Quando não quisermos trabalhar com os campos createdAt & UpdatedAt, podemos dizer isso lá na Model

--

```js
const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
      timestamps: false,
    }
  );
  return Product;
};

module.exports = Product;
// Dizemos para o Sequelize que nossa tabela não possui 
// as colunas createdAt e updatedAt. 
```

--

## Tudo configurado, bora utilizar!

---

### Vamos implementar todo o CRUD

- As controllers e services já estão prontas, basta utiliar o Sequelize.

--

### CRUD

- Create
- Read
- Update
- Delete

--

# E se precisarmos adicionar uma nova coluna em uma tabela?

--

```sh
$ npx sequelize-cli migration:generate --name create-column-price-product-table
```

--

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'price', {
      type: Sequelize.INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products', 'price');
  },
};
```

--

## Então é só executar a migration :)

```sh
$ npx sequelize-cli db:migrate
```

--

## Adicionamos um campo errado, OMG!

> O cliente quer adicionar o preço com centavos e criamos a coluna com o tipo INTEGER.

--

## Come back o/

```sh
$ npx sequelize-cli db:migrate:undo
```

--

## Queremos que seja do tipo FLOAT

```js
// ...
  type: Sequelize.FLOAT,
// ...
```

--

## Volta o cão arrependido

```sh
$ npx sequelize-cli db:migrate:undo
```

--

## Realizando uma listagem para ver a nova coluna

--

> Percebam que a nova coluna não foi retornada, será que no banco ela não foi alterada?

--

> O que acontece é que o nosso SELECT é explicitado em nossa Model. 

---

### Seeders

```sh
$ npx sequelize-cli seed:generate --name create-default-product
```

--

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'iPhone',
          description: 'iPhone X novo',
          price: 15000.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
```

--

### Executando os seeders

```sh
$ npx sequelize-cli db:seed:all
```