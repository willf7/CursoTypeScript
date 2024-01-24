const frase: string = "Front end";
const num: number = 2;
const condi: boolean = 4 > num;

console.log(typeof frase);
console.log(typeof num);
console.log(typeof condi);

const num2 = String(2);

if (typeof num2 === "string") {
  console.log("num2 e uma string");
} else {
  console.log("num2 nao e uma string");
}

console.log(typeof num2);

const num3 = new String(3);

if (typeof num3 === "string") {
  console.log("num2 e uma string");
} else {
  console.log("num3 nao e uma string");
}

console.log(typeof num3);

console.log(typeof String);
