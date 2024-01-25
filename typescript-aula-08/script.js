var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.priceInDolar = function () {
        return "R$ ".concat(this.price);
    };
    return Product;
}());
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
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, price, author) {
        var _this = _super.call(this, name, price) || this;
        _this.author = author;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    return Book;
}(Product));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(name, price, players) {
        var _this = _super.call(this, name, price) || this;
        _this.players = players;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    return Game;
}(Product));
function searchProduct(search) {
    if (search === "Socialism") {
        return new Book("Socialism", 200, "Ludwig Von Mises");
    }
    if (search === "Fortnite") {
        return new Game("Fortnite", 60, 7);
    }
    return null;
}
var product = searchProduct("Socialism");
var product2 = searchProduct("Fortnite");
if (product instanceof Book) {
    console.log(product.author);
}
if (product2 instanceof Game) {
    console.log(product2.players);
}
if (product instanceof Product) {
    console.log(product.name);
}
