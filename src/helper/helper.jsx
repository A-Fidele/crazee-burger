import { findObjectById } from "../utils/array";

export const calculateBasketTotal = (menu, basketProduct) => {
  const total = basketProduct.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(menu, basketProduct.id);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);
  return total;
};

export const checkProductIsClicked = (idProductedCliked, array) =>
  idProductedCliked === array.id;
