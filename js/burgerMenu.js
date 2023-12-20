document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".header__navbar__burger-icon");
  const mobileNav = document.querySelector(".header__navbar--mobile");
  const closeBtn = document.getElementById("closeBtn");

  burgerIcon.addEventListener("click", function () {
    mobileNav.classList.toggle("show");
  });
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});
