function scrollTo(initiator, offset) {
  initiator.addEventListener("click", () => {
    window.scrollTo({
      top: offset,
      left: null,
      behavior: "smooth",
    });
  });
}

export { scrollTo };
