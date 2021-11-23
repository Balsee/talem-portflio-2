// gsap.set(".hero", { scale: 1.25 });
gsap.to(".hero", {
  scale: 0.5,
  scrollTrigger: {
    start: "-64px top",
    trigger: ".hero",
    pin: ".hero",
    scrub: true,
    end: "+=100%",
  },
});
