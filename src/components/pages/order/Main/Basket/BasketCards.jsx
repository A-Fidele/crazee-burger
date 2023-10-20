import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { findObjectById } from "../../../../../utils/array";
import { checkProductIsClicked } from "../../../../../helper/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <BasketBodyStyled>
      <TransitionGroup>
        {basketProduct.map((product) => {
          const menuProduct = findObjectById(menu, product.id);
          return (
            <CSSTransition
              appear={true}
              classNames={"card-animation"}
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
                  isSelected={checkProductIsClicked(
                    product.id,
                    productSelected
                  )}
                  className={"card"}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketBodyStyled>
  );
}
const BasketBodyStyled = styled.div`
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;

  .card-appear {
    transform: translateX(200px);
    opacity: 0%;
  }
  .card-appear-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .card-animation-enter {
    transform: translateX(200px);
    opacity: 0%;
  }
  .card-animation-enter-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .card-animation-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .card-animation-exit-active {
    transform: translateX(-200px);
    transition: 1s;
    opacity: 0%;
  }

  .basket-card {
    margin-left: 14px;
    height: 86px;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
