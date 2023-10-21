import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { findObjectById } from "../../../../../utils/array";
import { checkProductIsClicked } from "../../../../../helper/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketCardsAnimation } from "../../../../../theme/animations";

export default function BasketCards() {
  const {
    username,
    menu,
    basketProduct,
    handleDeleteBasketProduct,
    isAdmin,
    productSelected,
    handleSelectCard,
  } = useContext(UserContext);

  const handleDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketCardsStyled}
      className={"transition-group"}
    >
      {basketProduct.map((product) => {
        const menuProduct = findObjectById(menu, product.id);
        return (
          <CSSTransition
            appear
            classNames={"card-container"}
            timeout={400}
            key={product.id}
          >
            <div className="basket-card">
              <BasketCard
                {...menuProduct}
                quantity={product.quantity}
                onDelete={(event) => handleDelete(event, product.id)}
                isClickable={isAdmin}
                onSelect={() => handleSelectCard(product.id)}
                isSelected={checkProductIsClicked(product.id, productSelected)}
                className={"card"}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
const BasketCardsStyled = styled.div`
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

  ${basketCardsAnimation};
`;
