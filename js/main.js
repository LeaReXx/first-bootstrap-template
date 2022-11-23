"use strict";
// get elements from dom
let $ = document;
let humbugger = $.querySelector(".humbugger");
let mobileNav = $.querySelector(".main-top-menu");
let mobileMenuColseBtn = $.querySelector(".close-mobile-menu");
humbugger.onclick = () => {
  mobileNav.classList.add("active");
};

// click when click out side of mobile menu
document.onclick = (e) => {
  console.log(e.target);
  if (!mobileNav.contains(e.target) && !humbugger.contains(e.target)) {
    mobileNav.classList.remove("active");
  }
};

// mobile menu close btn (xmark)
mobileMenuColseBtn.onclick = () => {
  mobileNav.classList.remove("active");
};
