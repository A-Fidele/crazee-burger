import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../enums/product";
import { emptyBasketAnimation } from "../../../../../theme/animations";

export default function EmptyBasket({ isLoading }) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
      </span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  .empty-message {
    font-family: ${theme.fonts.family.Amatic};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    line-height: 2;
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    align-items: center;
    justify-content: center;
    animation: ${emptyBasketAnimation} 1s;
  }
`;
