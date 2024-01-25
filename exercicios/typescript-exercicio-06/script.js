var btn = document.getElementById("origamid");
/*
Forma q eu pensei

function changeLink() {
  if (btn) {
    let href = btn.getAttribute("href");
    let hrefAtualizado = href?.replace("http://", "https://");
    btn.removeAttribute("href");
    if (hrefAtualizado) {
      btn.setAttribute("href", hrefAtualizado);
    }
  }
}

changeLink(); */
if (btn instanceof HTMLAnchorElement) {
    btn.href = btn.href.replace("http://", "https://");
}
