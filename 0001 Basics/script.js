console.log("1. GSAP Basics");

/*
	 GSAP Provides 2 Methods to Animate Elements
	1. gsap.to("elementToAnimate",{ animationProperties })
	2. gsap.from("elementToAnimate",{ animationProperties })
*/

/*
  Box Amimation
*/

gsap.to("#box", {
  x: 500,
  duration: 3,
  delay: 1,
  ease: "linear",
  scrub: 6,
  rotate: 360,
  backgroundColor: "cyan",
  borderRadius: "100%",
});

gsap.to("#box2", {
  x: 400,
  duration: 3,
  delay: 1,
  ease: "linear",
  scrub: 6,
  rotate: 360,
  backgroundColor: "red",
  borderRadius: "30%",
  scale: 2,
  repeat: -1, // Repeat Animation in direction only
  yoyo: true, // Reverse Animation allows to move back to original position
});

/*
  Text Animation
*/

gsap.from("h1", {
  opacity: 0,
  duration: 0.7,
  delay: 1,
  y: 20,
  ease: "linear",
  stagger: 0.7, // Animate Each Element with provided Delay
  // repeat: 2, // Repeat Animation
  yoyo: true, // Reverse Animation
});

/*
  Timeline Animation
*/

var tl = gsap.timeline();

// tl.to("#b1", {
//   x: 1500,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
// });

// tl.to("#b2", {
//   x: 1500,
//   duration: 2,
// });

// tl.to("#b3", {
//   x: 1500,
//   duration: 2,
// });

// Nav

tl.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.7,
});

tl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tl.from(".head", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
