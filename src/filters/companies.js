import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  const companiesContainer = getElement(".companies");
  companiesContainer.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");

  companiesContainer.addEventListener("click", function (e) {
    const btn = e.target;
    if (btn.classList.contains("company-btn")) {
      const newStore = store.filter((item) => btn.textContent === item.company);
      if (newStore < 1) {
        display(store, getElement(".products-container"), true);
      } else {
        display(newStore, getElement(".products-container"), true);
      }
    }
  });
};

export default setupCompanies;
