const marker = document.querySelector(".select-image__menu__marker");

const menu = document.querySelector(".select-image__menu");
const items = document.querySelectorAll(".select-image__menu__item");

for (let item of items) {
  item.addEventListener("click", (e) => {
    let offset = e.target.offsetLeft;

    marker.style.transform = `translateX(${offset}px)`;
  });
}
