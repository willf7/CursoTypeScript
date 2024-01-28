var btn = document.querySelector("button");
var nav = document.querySelector("nav");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("pointerdown", function () {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
    if (nav === null || nav === void 0 ? void 0 : nav.classList.contains("active")) {
        btn.setAttribute("aria-label", "Fechar menu");
        btn.setAttribute("aria-expanded", "true");
    }
    else {
        btn.setAttribute("aria-label", "Abrir menu");
        btn.setAttribute("aria-expanded", "false");
    }
});
