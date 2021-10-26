const rows = document.querySelectorAll(".info-grid__row");

const elementReveal = gsap.timeline({
  opacity: "0",
});

for (let row of rows) {
  elementReveal.fromTo(
    row.firstElementChild,
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: row,
        start: `-200% top`,
        end: "+=100",
        scrub: 1,
      },
    }
  );

  elementReveal.fromTo(
    row.lastElementChild,
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: row,
        start: `-200% top`,
        end: "+=100",
        scrub: 1,
      },
    }
  );
}
