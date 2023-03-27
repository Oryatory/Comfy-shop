import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

cartOverlay.addEventListener("click", function (e) {
  if (
    !e.target.closest(".cart") &&
    !e.target.classList.contains("cart-item-remove-btn") &&
    !e.target.parentElement.classList.contains("cart-item-increase-btn") &&
    !e.target.parentElement.classList.contains("cart-item-decrease-btn")
  ) {
    cartOverlay.classList.remove("show");
  }
});

closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
