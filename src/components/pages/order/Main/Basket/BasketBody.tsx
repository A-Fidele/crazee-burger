import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { isUndefined } from "../../../../../utils/array";

type BasketBodyProps = { isBasketEmpty: boolean }

export default function BasketBody({ isBasketEmpty }: BasketBodyProps) {
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
