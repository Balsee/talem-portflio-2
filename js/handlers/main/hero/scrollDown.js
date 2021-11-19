import { scrollTo } from "../../misc/scrollTo.js";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".hero__text__button");
  const info = document.querySelector(".info-grid");

  let offset = info.offsetTop - 64;

  scrollTo(button, offset);
});
