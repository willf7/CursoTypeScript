/* function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(somar(7, 7));
console.log(somar(7, 7, 7));

const subtrair = (a: number, b: number) => a - b;

console.log(subtrair(4, 2));

type Callback = (event: MouseEvent) => void;
 */

/* FUNCTION NEVER*/

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

abortar("Um erro aconteceu");

/* FUNCTION COM METODOS */

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(figura: Quadrado) {
  return figura.perimetro;
}

/* FUNCTION OVERLOAD */

function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((i) => i.trim().toLowerCase());
  }
}

const fruits = [" AppLe ", " bAnAnA ", "   OrAngE  "];

console.log(normalizar("  FROnt ENd  "));
console.log(normalizar(fruits));

function $(selector: "a"): HTMLAnchorElement | null;
function $(selector: "video"): HTMLVideoElement | null;
function $(selector: string): Element | null;
function $(selector: string): Element | null {
  return document.querySelector(selector);
}

$("a");
$("video")?.volume;
$("item");
