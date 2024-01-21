"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calculate(Number(input.value));
}
function calculate(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalChange() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", String(value));
        calculate(value);
    }
}
if (input) {
    input.addEventListener("keyup", totalChange);
}
