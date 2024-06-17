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

const thisYearEl = document.querySelector(".this-year");
thisYearEl.textContent = new Date().getFullYear();
