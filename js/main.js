// Menu functionality

// Select menu button
const menuBtn = document.querySelector(".navigation__button");

// Select menu list
const navMenu = document.querySelector(".navigation__menu");

// Select all links
const menuLinks = document.querySelectorAll(".navigation__link");

// Show/Hide menu list

const showMenu = () => {
  navMenu.classList.toggle("navigation__menu--active");

  menuBtn.classList.toggle("navigation__button--active");
};

// Add click event to nav hamburger-menu
menuBtn.addEventListener("click", showMenu);

menuLinks.forEach(v => {
  v.addEventListener("click", showMenu);
});
