const video = document.querySelector("#video") as HTMLVideoElement;

interface Product {
  nome: string;
  preco: number;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Product>;
}

async function handleProduct() {
  const product = await fetchProduct();
  console.log(product.nome);
}

handleProduct();

/* ! -> Deixa usar pq e uma garantia sua q o elemento exista diferento do ?*/

const video2 = document.querySelector(".video")!;

console.log(video2.innerHTML);
