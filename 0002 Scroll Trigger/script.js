/*
  Scroll Trigger
*/

// gsap.from(".page1 .box", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   ease: "linear",
//   scale: 0,
//   rotation: 360,
// });

// gsap.from(".page2 .box", {
//   opacity: 0,
//   duration: 1,
//   ease: "linear",
//   scale: 0,
//   rotation: 360,
//   scrollTrigger: {
//     trigger: ".page2 .box",
//     markers: true,
//     start: "top top",
//     end: "top bottom",
//   },
// });

gsap.to(".page2 h1", {
  transform: "translateX(-210%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top top",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
