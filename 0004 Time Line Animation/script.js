var tl = gsap.timeline();
var menu = document.querySelector(".menu");
var close = document.querySelector(".close");

tl.to(".full", {
  right: "0",
  duration: 0.5,
  ease: "linear",
});
tl.from(".full h4", {
  x: 150,
  duration: 0.5,
  stagger: 0.4,
  opacity: 0,
});
tl.from(".full i", {
  scale: 0,
  opacity: 0,
  ease: "elastic",
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
