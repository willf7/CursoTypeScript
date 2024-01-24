interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface dataInterface {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: dataInterface) {
  document.body.innerHTML += `
    <div>
      <h1>${data.nome}</h1>
      <h2>R$ ${data.preco}</h2>
      <p>${data.descricao}</p>
      <p>Garantia de ${data.garantia} anos</p>
      <p>Possui seguro: ${data.seguroAcidentes ? "Sim" : "Nao"}</p>
      <div>
        <h2>Informacoes da fabricante:</h2>
        <h3>Nome: ${data.empresaFabricante.nome}</h3>
        <p>Data de fundacao: ${data.empresaFabricante.fundacao}</p> 
        <p>Pais de fundacao: ${data.empresaFabricante.pais}</p>  
      </div>
      <div>
        <h2>Informacoes da Montadora:</h2>
        <h3>Nome: ${data.empresaMontadora.nome}</h3>
        <p>Data de fundacao: ${data.empresaMontadora.fundacao}</p> 
        <p>Pais de fundacao: ${data.empresaMontadora.pais}</p> 
      </div>
    </div>
  `;
}
