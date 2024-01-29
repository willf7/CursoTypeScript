/* function returning<Variable>(a: Variable): Variable {
  return a;
}

console.log(returning("pao"));
console.log(returning<string>("pao 2"));
console.log(returning(7));
console.log(returning(true));
 */

/* const numbers = [1, 2, 4, 6, 8, 12];
const fruits = [
  "banana",
  "apple",
  "strawberry",
  "pineapple",
  "orange",
  "limon",
];

function firstFive<T>(list: T[]): T[] {
  return list.slice(0, 5);
}

console.log(firstFive(numbers));
console.log(firstFive(fruits));
 */

/* function notNull<T>(arg: T) {
  if (arg !== null) {
    return arg;
  } else {
    return null;
  }
}

console.log(notNull("Will")?.toLowerCase());
console.log(notNull(200)?.toExponential());
 */

/* function dataType<T>(value: T) {
  const result = {
    data: value,
    dataType: typeof value,
  };
  return result;
}

console.log(dataType("will"));
console.log(dataType(7));
console.log(dataType(true));
 */

/* function extractText<T extends HTMLElement>(element: T) {
  return {
    text: element.innerText,
    element,
  };
}

const h1 = document.querySelector("h1");

if (h1) {
  console.log(extractText(h1).element);
} */

/* function $<T extends Element>(selector: string): T | null {
  return document.querySelector(selector);
}

const h1 = $<HTMLHeadElement>("h1")?.innerText;

console.log(h1);
 */

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json"
  );
  console.log(notebook);
}

handleData();
