import { useContext, useState } from "react";
import {
  deepClone,
  findObjectById,
  findObjectIndexById,
  removeObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";
import UserContext from "../context/UserContext";

export const useBasket = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  const { username } = useContext(UserContext);

  const handleDeleteBasketProduct = (idOfProducToDelete) => {
    const basketProductUpdated = removeObjectById(
      basketProduct,
      idOfProducToDelete
    );
    setLocalStorage(username, basketProductUpdated);
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
      setLocalStorage(username, basketProductUpdated);
      return;
    }
    const indexOfProductToChangeQuantity = findObjectIndexById(
      basketProduct,
      productToAdd.id
    );
    basketProductCopy[indexOfProductToChangeQuantity].quantity += 1;
    setLocalStorage(username, basketProductCopy);
    setBasketProduct(basketProductCopy);
  };

  return {
    setBasketProduct,
    basketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
  };
};
