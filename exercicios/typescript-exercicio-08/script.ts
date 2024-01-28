const btn = document.querySelector("button");
const nav = document.querySelector("nav");

btn?.addEventListener("pointerdown", () => {
  nav?.classList.toggle("active");
  if (nav?.classList.contains("active")) {
    btn.setAttribute("aria-label", "Fechar menu");
    btn.setAttribute("aria-expanded", "true");
  } else {
    btn.setAttribute("aria-label", "Abrir menu");
    btn.setAttribute("aria-expanded", "false");
  }
});
