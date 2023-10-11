import { useState } from "react";
import {
  deepClone,
  findObjectById,
  findObjectIndexById,
  removeObjectById,
} from "../utils/array";

export const useBasket = () => {
  const [basketProduct, setBasketProduct] = useState([]);

  const handleDeleteBasketProduct = (idOfProducToDelete) => {
    const basketProductUpdated = removeObjectById(
      basketProduct,
      idOfProducToDelete
    );
    setBasketProduct(basketProductUpdated);
  };

  const handleAddToBasket = (productToAdd) => {
    const basketProductCopy = deepClone(basketProduct);
    const productFound = findObjectById(basketProduct, productToAdd.id);

    if (!productFound) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketProductUpdated = [newBasketProduct, ...basketProductCopy];
      setBasketProduct(basketProductUpdated);
      return;
    }
    const indexOfProductToChangeQuantity = findObjectIndexById(
      basketProduct,
      productToAdd.id
    );
    basketProductCopy[indexOfProductToChangeQuantity].quantity += 1;
    setBasketProduct(basketProductCopy);
  };

  return {
    basketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };
};
