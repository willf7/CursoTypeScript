var _a;
/* Null */
var btn = document.querySelector("button");
var config = localStorage.getItem("config");
if (btn) {
    btn.click();
}
console.log(typeof null);
/* Undefined */
var total;
function teste() { }
console.log(typeof total);
if (total) {
    console.log("total foi definido");
}
else {
    console.log("total nao foi definido");
}
var jogo = {
    nome: "Read Dead Redemption",
};
var jogo2 = {};
if (jogo.nome) {
    console.log(jogo.nome.toLowerCase());
}
else {
    console.log("Jogo sem nome");
}
(_a = jogo2.nome) === null || _a === void 0 ? void 0 : _a.toLowerCase();
