interface Product {
  name: string;
  price: number;
  includeKeyboard: boolean;
  hasProduct: number;
}

function toFillData(data: Product) {
  document.body.innerHTML += `
    <div>
      <h2>${data.name}</h2>
      <p>R$ ${data.price}</p>
      <p>Include Keyboard : ${data.includeKeyboard ? "Yes" : "No"}</p>
      <p>Available : ${data.hasProduct > 0 ? "Yes" : "No"}</p>
    </div>
  `;
}

const computer: Product = {
  name: "Computer",
  price: 3500,
  includeKeyboard: false,
  hasProduct: 4,
};

const notebook: Product = {
  name: "Notebook",
  price: 5000,
  includeKeyboard: true,
  hasProduct: 0,
};

toFillData(computer);

toFillData(notebook);

/* Outro exemplo de type interface */

type Colors = "white" | "red" | "green";

function paintWebsite(value: Colors) {
  if (value === "white") {
    console.log("Paint website white");
  } else if (value === "red") {
    console.log("Paint website red");
  } else if (value === "green") {
    console.log("Paint website green");
  } else {
    console.log("Only colors: white, red and green");
  }
}
