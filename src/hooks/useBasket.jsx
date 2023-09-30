import { useState } from "react";
import { LARGE_WEIRD } from "../fakeData/fakeMenu";

export const useBasket = () => {
  const [basketProduct, setBasketProduct] = useState(LARGE_WEIRD);
  return { basketProduct };
};
