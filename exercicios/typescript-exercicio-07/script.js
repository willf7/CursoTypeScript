var links = document.querySelectorAll(".link");
console.log(links);
links.forEach(function (element) {
    if (element instanceof HTMLElement) {
        changeElement(element);
    }
});
function changeElement(value) {
    value.style.color = "green";
    value.style.border = "solid gray 3px";
}
