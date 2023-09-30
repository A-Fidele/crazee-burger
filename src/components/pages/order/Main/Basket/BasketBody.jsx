import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import UserContext from "../../../../../context/UserContext";
import BasketCard from "../../../../reusable-ui/BasketCard";

export default function BasketBody() {
  const { basketProduct, totalPrice, setTotalPrice } = useContext(UserContext);

  useEffect(() => {
    basketProduct &&
      basketProduct.map((product, i) => {
        setTotalPrice(totalPrice + parseFloat(product.leftDescription));
        //setTotalPrice(50);
        console.log("leftDescription", totalPrice);
      });
  }, [basketProduct]);

  return (
    <BasketBodyStyled>
      {/*<span className="title">Votre commande est vide.</span>*/}
      <div className="basket-card">
        {basketProduct &&
          basketProduct.map((product, i) => {
            return (
              <BasketCard
                key={i}
                title={product.title}
                imageSource={product.imageSource}
                price={product.leftDescription}
              />
            );
          })}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  flex: 1;
  flex-direction: column;
  overflow: scroll;
  scrollbar-color: transparent transparent;

  .basket-card {
    // border: 1px solid black;
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: flex-start;
  }

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
  }
`;
