import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import Header from "../../../../reusable-ui/Header";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import Footer from "./Footer";

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <div className="body">
        <span className="title">Votre commande est vide</span>
      </div>
      <Header>
        <Footer />
      </Header>
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
  }

  .body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};

    .title {
      font-family: "Amatic SC";
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P4};
      color: ${theme.colors.greyBlue};
    }
  }

  .footer {
  }
`;
