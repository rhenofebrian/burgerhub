//toggle button active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#strip-3").onclick = function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle active for shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = function (e) {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click on another sidebar to close search bar
const searchMenu = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!searchMenu.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

//click on another sidebar to close the menu
const stripMenu = document.querySelector("#strip-3");

document.addEventListener("click", function (e) {
  if (!stripMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//click on another sidebar to close shopping cart
const cartMenu = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!cartMenu.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
