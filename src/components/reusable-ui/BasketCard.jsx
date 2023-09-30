import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function BasketCard({ title, imageSource, price }) {
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
        <span>x1</span>
        <MdOutlineDeleteForever className="icon" />
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  //border: 1px solid black;
  width: 95%;
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.cardBasket};
  position: sticky;

  .image {
    //border: 2px solid blue;
    width: 85px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 85px;
      height: 70px;
      object-fit: contain;
    }
  }

  .title-price-container {
    height: 100%;
    width: 130px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
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
      margin-bottom: 16px;
      color: ${theme.colors.primary};
      font-family: "Open sans";
    }
  }

  .delete-product {
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: red;

      span {
        display: none;
      }
    }
    .icon {
      transform: scale(1.5);
      color: white;

      &:hover {
        color: black;
      }
    }
    &:active {
      .icon {
        color: white;
      }
    }
  }
`;
