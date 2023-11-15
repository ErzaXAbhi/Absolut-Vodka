const heroImg = document.querySelector(".heroImg");
const heroHeading = document.querySelector(".heroHeading");

gsap.from(heroImg, { y: 500, autoAlpha: 0, ease: "linear", duration: 1 });

gsap.from(heroHeading, { scale: 0, autoAlpha: 0, ease: "linear", duration: 1 });
