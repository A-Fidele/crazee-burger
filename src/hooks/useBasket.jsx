import { useState } from "react";
import { LARGE_WEIRD } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [newQuantity, setNewQuantity] = useState(0);

  const handleAddToBasket = (productToAdd) => {
    const basketProductCopy = deepClone(basketProduct);
    const productFound = basketProductCopy.find(
      (data) => data.id === productToAdd.id
    );

    if (!productFound) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const basketProductUpdated = [newBasketProduct, ...basketProductCopy];
      setBasketProduct(basketProductUpdated);
    }
    return;
  };

  return { basketProduct, handleAddToBasket };
};
