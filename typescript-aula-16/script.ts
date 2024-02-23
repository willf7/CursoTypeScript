const { body }: { body: HTMLElement } = document;

interface Produto {
  name: string;
  price: number;
}

function handleData({ name, price }: Produto) {
  name.includes("i");
  price.toFixed();
}

handleData({
  name: "William",
  price: 10.9,
});

function handleClick({ currentTarget, pageX }: MouseEvent) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML += `<h1>Mouse clickado em X: ${pageX}</h1>`;
  }
  console.log(pageX);
}

document.documentElement.addEventListener("click", handleClick);

function comparing(type: string, ...numbers: number[]) {
  if (type == "menor") {
    return Math.min(...numbers);
  }
  if (type == "maior") {
    return Math.max(...numbers);
  }
}

console.log(comparing("menor", 1, 2, 34, 5, 6, 7, 4, 12));
console.log(comparing("maior", 1, 2, 34, 5, 6, 7, 4, 12));
