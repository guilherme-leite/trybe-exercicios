const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1

function authorBornIn1947() { 
  let bookAuthor = books.find((book) => book.author.birthYear === 1947 ).author.name;
  return `1: ${bookAuthor} nasceu em 1947`;
}

console.log(authorBornIn1947());

// 2

function smallerName() {
  let nameBook = '';
  
  books.forEach((book) => {
    if(book.name.length < nameBook.length || nameBook === '') {
      nameBook = book.name;
    }
  })
  return `2: O livro ${nameBook} é o menor título na lista.`;
}

console.log(smallerName());

// 3

function getNamedBook() {
  let bookName = books.find((book) => book.name.lenght = 26)
  return bookName;
}

console.log("book with 26 characters name", getNamedBook());

// 4

function booksOrderedByReleaseYearDesc() {
  let bookList = books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
  return bookList;
}

console.log(booksOrderedByReleaseYearDesc());

// 5

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2001);
}

console.log(everyoneWasBornOnSecXX());

// 6

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s());

// 7

function authorUnique() {
  return books.every((book) =>
  !books.some((bookSome) =>
  (bookSome.author.birthYear === book.author.birthYear) 
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());