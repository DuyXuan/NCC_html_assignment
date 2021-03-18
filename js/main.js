const menu = document.querySelector(".menu");
const shortMenu = document.querySelector(".short-menu");
const menuBtn = document.querySelector(".header-icon");
const subMenu = document.querySelector(".sub-menu");
menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 1270) {
    subMenu.style.display = "block";
    document.querySelector(".main-content").style.opacity = "0.5";
  } else {
    menu.classList.toggle("showMenu");
    shortMenu.classList.toggle("show-short-menu");
    document.querySelector(".main-content").classList.toggle("move-content");
  }
});
document.querySelector(".sub-menu-icon").addEventListener("click", (e) => {
  subMenu.style.display = "none";
  document.querySelector(".main-content").style.opacity = "1";
});
