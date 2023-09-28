import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">
        <span className="total">Total</span>
        <span className="price">0,00 €</span>
      </div>
      <div className="body">
        <span className="title">Votre commande est vide</span>
      </div>
      <div className="footer">
        <span className="slogan">Codé avec ❤️ et React.JS</span>
      </div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 100%;
  height: 100%;

  .head {
    height: 70px;
    background-color: ${theme.colors.background_dark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 13px;
    padding-right: 17px;

    .total {
      font-family: "Amatic SC";
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.primary};
    }

    .price {
      font-family: "Amatic SC";
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.primary};
    }
  }

  .body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background_white};

    .title {
      font-family: "Amatic SC";
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.greyBlue};
    }
  }

  .footer {
    height: 70px;
    background-color: ${theme.colors.background_dark};
    display: flex;
    align-items: center;
    justify-content: center;
    .slogan {
      font-family: "Amatic SC";
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.md};
      font-weight: ${theme.fonts.weights.bold};
    }
  }
`;
