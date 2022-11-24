"use strict";
// get elements from dom
const $ = document;
const humbugger = $.querySelector(".humbugger");
const mobileNav = $.querySelector(".main-top-menu");
const mobileMenuColseBtn = $.querySelector(".close-mobile-menu");
const mainMenuItems = $.querySelectorAll(".have-tree-menu");
const treeMenus = $.querySelectorAll(".tree-menu");

humbugger.onclick = () => {
  mobileNav.classList.add("active");
};

// click when click out side of mobile menu
document.onclick = (e) => {
  if (!mobileNav.contains(e.target) && !humbugger.contains(e.target)) {
    mobileNav.classList.remove("active");
  }
};

// mobile menu close btn (xmark)
mobileMenuColseBtn.onclick = () => {
  mobileNav.classList.remove("active");
};

// mobile tree menu handler
for (let menuItems of mainMenuItems) {
  menuItems.addEventListener("click", function () {
    if (getComputedStyle(this.nextElementSibling).height === "0px") {
      for (let treeItems of treeMenus) {
        treeItems.style.height = "0px";
      }

      this.nextElementSibling.style.height = `${this.nextElementSibling.scrollHeight}px`;
    } else {
      this.nextElementSibling.style.height = "0px";
    }
  });
}

for (let treeItems of treeMenus) {
  treeItems.addEventListener("mouseleave", () => {
    treeItems.style.height = "0px";
  });
}
