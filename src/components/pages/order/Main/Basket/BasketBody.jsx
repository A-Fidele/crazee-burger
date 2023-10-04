import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import BasketCard from "../../../../reusable-ui/BasketCard";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody({
  basketProduct,
  handleDeleteBasketProduct,
  isModeAdmin,
}) {
  return (
    <>
      {basketProduct.length > 0 ? (
        <BasketBodyStyled>
          {basketProduct.map((product) => {
            return (
              <div className="basket-card" key={product.id}>
                <BasketCard
                  {...product}
                  onDelete={() => handleDeleteBasketProduct(product.id)}
                  isModeAdmin={isModeAdmin}
                />
              </div>
            );
          })}
        </BasketBodyStyled>
      ) : (
        <EmptyBasket />
      )}
    </>
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
