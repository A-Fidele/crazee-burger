import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { findObjectById } from "../../../../../utils/array";
import { checkProductIsClicked } from "../../../../../helper/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketCardsAnimation } from "../../../../../theme/animations";
import { formatPrice } from "../../../../../utils/maths";
import { BASKET_MESSAGE } from "../../../../../enums/product";
import { convertStringToBoolean } from "../../../../../utils/string";
import Sticker from "../../../../reusable-ui/Stiker";

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
        console.log(
          "convertStringToBoolean(menuProduct.isPublicised): ",
          convertStringToBoolean(menuProduct.isPublicised),
          " product: ",
          menuProduct.title
        );
        return (
          <CSSTransition
            appear
            classNames={"card-container"}
            timeout={400}
            key={product.id}
          >
            <div className="card-container">
              {convertStringToBoolean(menuProduct.isPublicised) && (
                <Sticker className="badge" />
              )}
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
                  price={
                    convertStringToBoolean(menuProduct.isAvailable)
                      ? formatPrice(menuProduct.price)
                      : BASKET_MESSAGE.NOT_AVAILABLE
                  }
                />
              </div>
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

  ${basketCardsAnimation};

  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    position: relative;

    .basket-card {
      margin-left: 5px;
      height: 86px;
      box-sizing: border-box;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .badge {
      position: absolute;
      bottom: 10%;
      left: 21%;
      z-index: 1;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }
`;
