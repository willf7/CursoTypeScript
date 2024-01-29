/* function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(somar(7, 7));
console.log(somar(7, 7, 7));

const subtrair = (a: number, b: number) => a - b;

console.log(subtrair(4, 2));

type Callback = (event: MouseEvent) => void;
 */
var _a;
/* FUNCTION NEVER*/
function abortar(mensagem) {
    throw new Error(mensagem);
}
abortar("Um erro aconteceu");
function calcular(figura) {
    return figura.perimetro;
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(function (i) { return i.trim().toLowerCase(); });
    }
}
var fruits = [" AppLe ", " bAnAnA ", "   OrAngE  "];
console.log(normalizar("  FROnt ENd  "));
console.log(normalizar(fruits));
function $(selector) {
    return document.querySelector(selector);
}
$("a");
(_a = $("video")) === null || _a === void 0 ? void 0 : _a.volume;
$("item");
