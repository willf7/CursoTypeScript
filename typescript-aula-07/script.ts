/* Null */
const btn = document.querySelector("button");
const config = localStorage.getItem("config");

if (btn) {
  btn.click();
}

console.log(typeof null);

/* Undefined */

let total;

function teste() {}

console.log(typeof total);

if (total) {
  console.log("total foi definido");
} else {
  console.log("total nao foi definido");
}

interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: "Read Dead Redemption",
};

const jogo2: Product = {};

if (jogo.nome) {
  console.log(jogo.nome.toLowerCase());
} else {
  console.log("Jogo sem nome");
}

jogo2.nome?.toLowerCase();
