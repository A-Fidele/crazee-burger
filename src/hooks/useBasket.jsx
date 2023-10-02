import { useState } from "react";
import { LARGE_WEIRD } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basketProduct, setBasketProduct] = useState([]);

  const handleAddToBasket = (productToAdd) => {
    const basketProductCopy = deepClone(basketProduct);
    const productFound = basketProduct.find(
      (data) => data.id === productToAdd.id
    );

    if (!productFound) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const basketProductUpdated = [newBasketProduct, ...basketProductCopy];
      setBasketProduct(basketProductUpdated);
      return;
    }
    const indexOfProductToChangeQuantity = basketProduct.findIndex(
      (product) => product.id === productToAdd.id
    );
    basketProductCopy[indexOfProductToChangeQuantity].quantity += 1;
    setBasketProduct(basketProductCopy);
  };

  return { basketProduct, handleAddToBasket };
};
