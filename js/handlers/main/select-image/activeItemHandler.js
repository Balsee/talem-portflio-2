const menuItems = document.querySelectorAll(".select-image__menu__item");
const contentItems = document.querySelectorAll(".select-image__content__item");

let value;

for (let menuItem of menuItems) {
  menuItem.addEventListener("click", (e) => {
    value = e.target.innerText;

    for (let contentItem of contentItems) {
      contentItem.classList.remove("active");
    }

    contentItems[value - 1].classList.add("active");
  });
}
