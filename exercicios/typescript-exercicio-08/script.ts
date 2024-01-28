const links = document.querySelectorAll(".link");

console.log(links);

links.forEach((element) => {
  if (element instanceof HTMLElement) {
    changeElement(element);
  }
});

function changeElement(value: HTMLElement) {
  value.style.color = "green";
  value.style.border = "solid gray 3px";
}
