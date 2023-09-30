import React, { useContext } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import Total from "./Total";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import UserContext from "../../../../../context/UserContext";

export default function Basket() {
  const { totalPrice, basketProduct } = useContext(UserContext);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(parseInt(totalPrice))} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
