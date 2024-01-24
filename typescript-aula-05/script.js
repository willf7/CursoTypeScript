var numbers = [10, 20, 30, 40, 5, 7, 8];
var values = [10, 20, "valores", 40, "produtos", 7, 8];
function biggerThan10(data) {
    return data.filter(function (n) { return n > 10; });
}
function filterValues(data) {
    return data.filter(function (i) { return typeof i === "number"; });
}
console.log(biggerThan10(numbers));
console.log(filterValues(values));
var dados = [
    ["Red Dead Redemption 2", 120],
    ["GTA V", 80],
];
