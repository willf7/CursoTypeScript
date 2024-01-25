function normaliza(texto: any) {
  return texto.trim().toLowerCase();
}

console.log(normaliza(" PalMeiRaaS "));
console.log(normaliza(10));

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

function manipularData(data: any) {
  console.log(data.nome);
}
