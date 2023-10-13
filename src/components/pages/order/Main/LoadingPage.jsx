import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../theme";

export default function LoadingPage({ className }) {
  return (
    <LoadingPageStyled className={className}>
      <span className="title">CHARGEMENT EN COURS ...</span>
    </LoadingPageStyled>
  );
}

const LoadingPageStyled = styled.div`
  ${(props) => extraStyled[props.className]}
`;
const extraStyledMenu = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;

  .title {
    font-weight: ${theme.fonts.weights.regular};
    font-family: "Amatic SC";
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
const extraStyledBasket = css`
  flex: 1;
  box-shadow: ${theme.shadows.basket};
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
const extraStyled = {
  menu: extraStyledMenu,
  basket: extraStyledBasket,
};
