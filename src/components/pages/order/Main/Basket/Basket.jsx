import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import UserContext from "../../../../../context/UserContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basketProduct } = useContext(UserContext);

  const basketTotal = basketProduct.reduce((total, basketProduct) => {
    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(basketTotal)} />
      {basketProduct.length > 0 ? (
        <BasketBody basketProduct={basketProduct} />
      ) : (
        <EmptyBasket />
      )}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  //  height: 100%;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
`;
