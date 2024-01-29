function around(value: number): number;
function around(value: string): string;
function around(value: number | string) {
  if (typeof value === "number") {
    return Math.ceil(value);
  } else {
    return Math.ceil(Number(value)).toString();
  }
}

console.log(around(10.23));
console.log(around("202"));
