const obj = {
  nome: "will",
};

if ("nome" in obj) {
  console.log("sim");
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const json = await response.json();
  handleProduct(json);
}

interface Product {
  nome: string;
  preco: number;
}

function handleProduct(data: Product) {
  console.log(data);
  if ("nome" in data) {
    document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
    `;
  }
  if ("preco" in data) {
    document.body.innerHTML += `
        <p>Preco: ${data.preco}</p>\
    `;
  }
}

fetchProduct();

/* Unknown */

function typeGuard(value: unknown) {
  if (typeof value === "number") {
    return value.toFixed();
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return value.valueOf();
  } else if (typeof value === "object") {
    return value;
  } else {
    return "Nao e number, string, boolen e nem object";
  }
}

console.log(typeGuard(102.234));
console.log(typeGuard("William FELIPE"));
console.log(typeGuard(true));
console.log(typeGuard(document.querySelector("body")));
console.log(typeGuard(["banana", "uva", "pera"]));
