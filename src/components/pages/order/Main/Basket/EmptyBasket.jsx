import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="title">Votre commande est vide.</span>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  .title {
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    line-height: 2;
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;
