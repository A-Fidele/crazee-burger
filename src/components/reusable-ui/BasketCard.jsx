import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function BasketCard({
  title = "New York Fries",
  imageSource = "http://localhost:5173/images/fries3.png",
  price = "3",
}) {
  return (
    <BasketCardStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="title-price-container">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="delete-product">
        <span>delete</span>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  .image {
    width: 85px;
    height: 100%;
    border: 2px solid blue;

    img {
      width: 85px;
      height: 70px;
      object-fit: contain;
    }
  }

  .title-price-container {
    border: 2px solid red;
    height: 100%;
    width: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};

    .title {
      align-items: center;
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
    }
    .price {
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.regular};
    }
  }

  .delete-product {
    border: 2px solid green;
    height: 100%;
    width: 76px;
    display: flex;
    align-items: center;
  }
`;
