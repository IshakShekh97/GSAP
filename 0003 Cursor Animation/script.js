var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var imageDiv = document.querySelector(".image");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    ease: "sine",
  });
});

imageDiv.addEventListener("mouseenter", (e) => {
  cursor.innerHTML = "view More";
  gsap.to(cursor, {
    scale: 4,
    ease: "elastic",
    duration: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    ease: "elastic",
    duration: 1,
    backgroundColor: "rgba(255, 255, 255)",
  });
});
