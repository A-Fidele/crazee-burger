import React, { useContext } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths.js";
import BasketBody from "./BasketBody.js";
import UserContext from "../../../../../context/UserContext.js";
import { theme } from "../../../../../theme/index.js";
import BasketFooter from "./BasketFooter.js";
import BasketHeader from "./BasketHeader.js";
import { calculateBasketTotal } from "../../../../../helper/helper.js";
import { isEmpty } from "../../../../../utils/array.js";

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
