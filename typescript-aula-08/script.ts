class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  priceInDolar() {
    return `R$ ${this.price}`;
  }
}
/* 
const book = new Product("Esmague o estado", 80);

console.log(book.name);
console.log(book.price);
console.log(book.priceInDolar());
console.log(book instanceof Product);

class Book {
  author: string;
  constructor(author: string) {
    this.author = author;
  }
}

class Game {
  players: number;
  constructor(players: number) {
    this.players = players;
  }
}

function searchProduct(search: string) {
  if (search === "Socialism") {
    return new Book("Ludwig Von Mises");
  }
  if (search === "Fortnite") {
    return new Game(7);
  }
  return null;
}

const product = searchProduct("Socialism");
const product2 = searchProduct("Fortnite");

if (product instanceof Book) {
  console.log(product.author);
}

if (product2 instanceof Game) {
  console.log(product2.players);
} */

/* EXTENDS */

class Book extends Product {
  author: string;
  name: string;
  price: number;
  constructor(name: string, price: number, author: string) {
    super(name, price);
    this.author = author;
    this.name = name;
    this.price = price;
  }
}

class Game extends Product {
  players: number;
  name: string;
  price: number;
  constructor(name: string, price: number, players: number) {
    super(name, price);
    this.players = players;
    this.name = name;
    this.price = price;
  }
}

function searchProduct(search: string) {
  if (search === "Socialism") {
    return new Book("Socialism", 200, "Ludwig Von Mises");
  }
  if (search === "Fortnite") {
    return new Game("Fortnite", 60, 7);
  }
  return null;
}

const product = searchProduct("Socialism");
const product2 = searchProduct("Fortnite");

if (product instanceof Book) {
  console.log(product.author);
}

if (product2 instanceof Game) {
  console.log(product2.players);
}

if (product instanceof Product) {
  console.log(product.name);
}
