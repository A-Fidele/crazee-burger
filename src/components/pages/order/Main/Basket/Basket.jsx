import React, { useContext } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";
import UserContext from "../../../../../context/UserContext";
import { theme } from "../../../../../theme";
import BasketFooter from "./BasketFooter.jsx";
import BasketHeader from "./BasketHeader.jsx";
import { calculateBasketTotal } from "../../../../../helper/calculate";
import { isEmpty } from "../../../../../utils/array";

export default function Basket() {
  const { menu, basketProduct } = useContext(UserContext);
  const basketTotal = calculateBasketTotal(menu, basketProduct);
  const isBasketEmpty = isEmpty(basketProduct);

  return (
    <BasketStyled>
      <BasketHeader amountToPay={formatPrice(basketTotal)} />
      <BasketBody isBasketEmpty={isBasketEmpty} />
      <BasketFooter />
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
