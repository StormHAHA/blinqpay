const DESKTOPNAVBAR = document.querySelector(".header__nav-bar");
function openMenu() {
  const MOBILENAVBAR = document.querySelector(".header__mobile-nav");
  const MOBILENAVBARIN = document.querySelector(".mobile");
  MOBILENAVBAR.style.display = "flex";
  MOBILENAVBARIN.style.display = "flex";
}

function closeMenu() {
  const MOBILENAVBAR = document.querySelector(".header__mobile-nav");
  const MOBILENAVBARIN = document.querySelector(".mobile");
  MOBILENAVBAR.style.display = "none";
  MOBILENAVBARIN.style.display = "none";
}
