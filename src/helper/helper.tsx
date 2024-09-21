import { ProductType } from "../enums/product";
import { findObjectById } from "../utils/array";
import { convertStringToBoolean } from "../utils/string";

export const calculateBasketTotal = (menu: ProductType[], basketProduct: ProductType[]): number => {
  const total = basketProduct.reduce((total: number, basketProduct: ProductType) => {
    const menuProduct = findObjectById(menu, basketProduct.id);
    if (isNaN(menuProduct.price)) return total;
    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);
  return total;
};

export const checkProductIsClicked = (idProductedCliked: string, array: ProductType) =>
  idProductedCliked === array.id;
