const numbers = [10, 20, 30, 40, 5, 7, 8];
const values = [10, 20, "valores", 40, "produtos", 7, 8];

function biggerThan10(data: Array<number>) {
  return data.filter((n) => n > 10);
}

function filterValues(data: Array<number | string>) {
  return data.filter((i) => typeof i === "number");
}

console.log(biggerThan10(numbers));
console.log(filterValues(values));

const dados = [
  ["Red Dead Redemption 2", 120],
  ["GTA V", 80],
];
