// Select Elements
const bullets = document.querySelectorAll("[data-bullets] li");
const appContent = document.querySelector("[data-app-content]");
const thankMassage = document.querySelector("[data-thank-massage]");
const submitBtn = document.querySelector("[data-submit-btn]");
const selectEl = document.querySelector("[data-select]");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    bullet.classList.add("active");
  });
});

submitBtn.addEventListener("click", () => {
  // bullets that has active class
  const activeBullets = document.querySelectorAll("[data-bullets] li.active");
  if (activeBullets.length > 0) {
    replace(appContent, thankMassage);
    selectEl.innerHTML = `You selected ${activeBullets.length} out of ${bullets.length}`;
  }
});

function replace(searchElement, replacedElement) {
  searchElement.style.display = "none";
  replacedElement.style.display = "flex";
}
