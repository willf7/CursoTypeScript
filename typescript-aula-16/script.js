var body = document.body;
function handleData(_a) {
    var name = _a.name, price = _a.price;
    name.includes("i");
    price.toFixed();
}
handleData({
    name: "William",
    price: 10.9,
});
function handleClick(_a) {
    var currentTarget = _a.currentTarget, pageX = _a.pageX;
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML += "<h1>Mouse clickado em X: ".concat(pageX, "</h1>");
    }
    console.log(pageX);
}
document.documentElement.addEventListener("click", handleClick);
function comparing(type) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    if (type == "menor") {
        return Math.min.apply(Math, numbers);
    }
    if (type == "maior") {
        return Math.max.apply(Math, numbers);
    }
}
console.log(comparing("menor", 1, 2, 34, 5, 6, 7, 4, 12));
console.log(comparing("maior", 1, 2, 34, 5, 6, 7, 4, 12));
