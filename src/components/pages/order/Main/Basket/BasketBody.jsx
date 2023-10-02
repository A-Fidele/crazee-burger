import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import UserContext from "../../../../../context/UserContext";
import BasketCard from "../../../../reusable-ui/BasketCard";

export default function BasketBody({ basketProduct }) {
  return (
    <BasketBodyStyled>
      <div className="basket-card">
        {basketProduct &&
          basketProduct.map((product, i) => {
            return (
              <div className="card" key={i}>
                <BasketCard {...product} />
              </div>
            );
          })}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  .basket-card {
    // border: 1px solid black;
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-direction: flex-start;
    margin-left: 16px;
    margin-right: 16px;
  }
  .card {
    margin-bottom: 20px;
  }
`;
