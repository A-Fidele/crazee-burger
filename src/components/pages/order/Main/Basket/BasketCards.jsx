import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";

export default function BasketCards() {
  const {
    basketProduct,
    handleDeleteBasketProduct,
    isAdmin,
    productSelected,
    handleSelectCard,
  } = useContext(UserContext);

  const checkProductIsClicked = (idProductedCliked, productSelected) => {
    return idProductedCliked === productSelected.id;
  };

  return (
    <BasketBodyStyled>
      {basketProduct.map((product) => {
        return (
          <div className="basket-card" key={product.id}>
            <BasketCard
              {...product}
              onDelete={() => handleDeleteBasketProduct(product.id)}
              isClickable={isAdmin}
              onSelect={() => handleSelectCard(product.id)}
              isSelected={checkProductIsClicked(product.id, productSelected)}
            />
          </div>
        );
      })}
    </BasketBodyStyled>
  );
}
const BasketBodyStyled = styled.div`
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  .basket-card {
    margin-left: 14px;
    height: 86px;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
