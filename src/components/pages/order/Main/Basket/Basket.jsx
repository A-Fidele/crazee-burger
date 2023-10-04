import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import UserContext from "../../../../../context/UserContext";
import EmptyBasket from "./EmptyBasket";
import { theme } from "../../../../../theme";

export default function Basket() {
  const { basketProduct, isAdmin, handleDeleteBasketProduct } =
    useContext(UserContext);

  const basketTotal = basketProduct.reduce((total, basketProduct) => {
    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(basketTotal)} />
      <BasketBody
        basketProduct={basketProduct}
        isModeAdmin={isAdmin}
        handleDeleteBasketProduct={handleDeleteBasketProduct}
      />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
