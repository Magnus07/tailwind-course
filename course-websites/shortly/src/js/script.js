let form = document.getElementById("shorten-form");
let input = document.getElementById("shorten-input");
let errorMsg = document.getElementById("shorten-error");

// mobile menu
let menu = document.getElementById("menu");
let menuButton = document.getElementById("menu-btn");

form.addEventListener("submit", handleSubmit);
menuButton.addEventListener("click", toggleMenu);

// toogle mobile menu
function toggleMenu() {
  menuButton.classList.toggle("open");
  menu.classList.toggle("hidden");
  // menu.classList.toggle("block");
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function handleSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.innerHTML = "Please, enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errorMsg.innerHTML = "Please, enter valid URL";
    input.classList.add("border-red");
  } else {
    input.classList.remove("border-red");
    errorMsg.innerHTML = "";
    alert("success");
  }
}
