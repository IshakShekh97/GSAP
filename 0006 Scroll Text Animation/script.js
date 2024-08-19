window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-190%)",
      duration: 1,
      ease: "linear",
    });
    gsap.to(".marquee img", {
      duration: 0.4,
      ease: "linear",
      rotate: 0,
    });
  } else {
    gsap.to(".marquee", {
      transform: "translateX(10%)",
      duration: 1,
      ease: "linear",
    });
    gsap.to(".marquee img", {
      rotate: 180,
      duration: 0.4,
      ease: "linear",
    });
  }
});
