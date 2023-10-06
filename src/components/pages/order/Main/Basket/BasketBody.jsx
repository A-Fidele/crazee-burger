import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";

export default function BasketBody({ isBasketEmpty }) {
  return <>{isBasketEmpty ? <EmptyBasket /> : <BasketCards />}</>;
}
