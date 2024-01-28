/* const btn = document.querySelector("button");

function handleClick(event: MouseEvent) {
  console.log("clickou");
}

btn?.addEventListener("click", handleClick);

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log("E uma instacia de MouseEvent");
    console.log(event.pageX);
  }
  if (event instanceof KeyboardEvent) {
    console.log("E uma instacia de KeyboardEvent");
    console.log(event.key);
  }
  if (event instanceof TouchEvent) {
    console.log("E uma instacia de TouchEvent");
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
window.addEventListener("keydown", ativarMenu);
 */
/* const btn = document.querySelector("button");

function handleClick(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this);
}

btn?.addEventListener("click", handleClick); */
var btn = document.querySelector("button");
function handleClick(event) {
    var elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerHTML);
    }
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
