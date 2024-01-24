function toFillData(data) {
    document.body.innerHTML += "\n    <div>\n      <h2>".concat(data.name, "</h2>\n      <p>R$ ").concat(data.price, "</p>\n      <p>Include Keyboard : ").concat(data.includeKeyboard ? "Yes" : "No", "</p>\n      <p>Available : ").concat(data.hasProduct > 0 ? "Yes" : "No", "</p>\n    </div>\n  ");
}
var computer = {
    name: "Computer",
    price: 3500,
    includeKeyboard: false,
    hasProduct: 4,
};
var notebook = {
    name: "Notebook",
    price: 5000,
    includeKeyboard: true,
    hasProduct: 0,
};
toFillData(computer);
toFillData(notebook);
function paintWebsite(value) {
    if (value === "white") {
        console.log("Paint website white");
    }
    else if (value === "red") {
        console.log("Paint website red");
    }
    else if (value === "green") {
        console.log("Paint website green");
    }
    else {
        console.log("Only colors: white, red and green");
    }
}
