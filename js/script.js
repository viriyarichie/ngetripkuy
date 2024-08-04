//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

//ketika hamburger menu diklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar side bar buat close navigation
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
