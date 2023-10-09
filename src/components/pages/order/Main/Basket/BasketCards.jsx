import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { findObjectById } from "../../../../../utils/array";

export default function BasketCards() {
  const {
    menu,
    basketProduct,
    handleDeleteBasketProduct,
    isAdmin,
    productSelected,
    handleSelectCard,
  } = useContext(UserContext);

  const checkProductIsClicked = (idProductedCliked, productSelected) => {
    return idProductedCliked === productSelected.id;
  };
  const handleDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketBodyStyled>
      {basketProduct.map((product) => {
        const menuProduct = findObjectById(menu, product.id);
        return (
          <div className="basket-card" key={product.id}>
            <BasketCard
              {...menuProduct}
              quantity={product.quantity}
              onDelete={(event) => handleDelete(event, product.id)}
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
