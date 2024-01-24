let total: number | string = 200;
total = 400;
console.log(total);

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber("10"));
console.log(isNumber(10));

const btn = document.querySelector("button");

btn?.click();
