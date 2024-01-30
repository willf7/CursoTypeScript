/* async function fetchData() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos(json);
}
 */
/* fetchData(); */

/* function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log("E uma instacia de Array");
  }
} */

/* IS tem que ser uma funcao booleana */

/* function isString(value: unknown): value is string {
  return typeof value === "string";
}

console.log(isString("Will"));
 */

async function fetchData() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleCursos(json);
}

fetchData();

interface Product {
  nome: string;
  descricao: string;
  preco: number;
}

function isProduct(value: unknown): value is Product {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "descricao" in value &&
    "preco" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: Product) {
  if (isProduct(data)) {
    return console.log(data.nome + data.preco);
  } else {
    return false;
  }
}
