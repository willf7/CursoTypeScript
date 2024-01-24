function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw "value deve ser um number ou string";
    }
}
console.log(toNumber("7"));
console.log(toNumber(7));
console.log(toNumber(false));
