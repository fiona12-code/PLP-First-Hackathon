function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let button = document.querySelector("button");
button.addEventListener("click", changeTheme);
