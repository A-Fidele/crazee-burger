import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { isUndefined } from "../../../../../utils/array";

export default function BasketBody({ isBasketEmpty }) {
  const { menu } = useContext(UserContext);

  return (
    <>
      {isBasketEmpty ? (
        <EmptyBasket isLoading={isUndefined(menu)} />
      ) : (
        <BasketCards />
      )}
    </>
  );
}
