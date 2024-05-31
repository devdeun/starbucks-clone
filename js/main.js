const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector(".search-input");
const searchIconEl = searchEl.querySelector(".search-icon");

function handleSearchInputClick() {
  searchInputEl.focus();
}

function handleFocusInput() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
}

function handleBlurInput() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
}

searchEl.addEventListener("click", handleSearchInputClick);
searchInputEl.addEventListener("focus", handleFocusInput);
searchInputEl.addEventListener("blur", handleBlurInput);

const badgeEl = document.querySelector(".side-badges");

function handleWindowScroll() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
  }
}

window.addEventListener("scroll", _.throttle(handleWindowScroll, 300));
