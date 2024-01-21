"use strict";
let product = "Book";
let age = 18;
const car = {
    brand: "Audi",
    doors: 6,
    tires: 4,
};
const older = age > 50 ? true : "Younger";
const playstation = {
    name: "Playstation",
    price: "5000",
};
function transformPrice(product) {
    product.price = `R$ ${product.price}`;
    return product;
}
console.log(transformPrice(playstation));
