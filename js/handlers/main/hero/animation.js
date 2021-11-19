gsap.set(".hero", { scale: 1 });
gsap.to(".hero__container", {
  scale: 0.5,
  outlineWidth: 15,
  scrollTrigger: {
    start: "-64px top",
    trigger: ".hero",
    pin: ".hero",
    scrub: true,
    end: "+=150%",
  },
});
