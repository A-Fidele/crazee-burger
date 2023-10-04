import EmptyBasket from "./EmptyBasket";
import BasketCards from "./BasketCards";

export default function BasketBody({
  basketProduct,
  handleDeleteBasketProduct,
  isModeAdmin,
}) {
  return (
    <>
      {basketProduct.length > 0 ? (
        <BasketCards
          basketProduct={basketProduct}
          handleDeleteBasketProduct={handleDeleteBasketProduct}
          isModeAdmin={isModeAdmin}
        />
      ) : (
        <EmptyBasket />
      )}
    </>
  );
}
