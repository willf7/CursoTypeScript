const video = document.querySelector("#videoPrincipal");

if (video instanceof HTMLVideoElement) {
  console.log(video.volume);
}

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link);
  }
});
