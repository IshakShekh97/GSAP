function breakLetters() {
  var head = document.querySelector("h1");
  var headText = head.textContent;

  var splittedText = headText.split("");
  let clutter = "";

  var half = Math.floor(splittedText.length / 2);

  splittedText.forEach((text, index) => {
    if (index < half + 1) {
      clutter += `<span class="a">${text}</span>`;
    } else {
      clutter += `<span class="b">${text}</span>`;
    }
  });

  head.innerHTML = clutter;
}

breakLetters();

gsap.from("h1 .a", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 1,
  backgroundColor: "blue",
});

gsap.from("h1 .b", {
  y: 100,
  opacity: 0,
  stagger: -0.1,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 1,
  backgroundColor: "blue",
});
