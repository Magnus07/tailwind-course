let tabs = Array.from(document.getElementsByClassName("tab"));
let borders = Array.from(document.getElementsByClassName("under-line"));
let features = Array.from(document.getElementsByClassName("feature"));

tabs.forEach((element) => {
  element.addEventListener("click", handleTabClick);
});

function handleTabClick(e) {
  const clickedIndex = e.target.getAttribute("data-target")[6];

  borders.forEach((border, index) => {
    if (index + 1 == clickedIndex) {
      border.classList.add("bg-red-500");
      border.classList.remove("bg-transparent");
      features[index].classList.remove("hidden");
    } else {
      border.classList.remove("bg-red-500");
      border.classList.add("bg-transparent");
      features[index].classList.add("hidden");
    }
  });

  e.preventDefault();
}

// HAMBURGER MENU

let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", handleHamburgerMenuToggle);

function handleHamburgerMenuToggle() {
  menu.classList.toggle("block");
  menu.classList.toggle("hidden");
  menuBtn.classList.toggle("open");

  if (menu.classList.contains("block")) {
    logo.setAttribute(
      "src",
      "../../all-project-assets/bookmark/images/logo-bookmark-footer.svg"
    );
  } else {
    logo.setAttribute(
      "src",
      "../../all-project-assets/bookmark/images/logo-bookmark.svg"
    );
  }
}
