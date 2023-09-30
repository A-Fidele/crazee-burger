import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import { MdOutlineDeleteForever } from "react-icons/md";
import { formatPrice } from "../../utils/maths";
const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function BasketCard({ title, imageSource, price, quantity }) {
  return (
    <BasketCardStyled>
      <div className="image">
        <img src={imageSource ? imageSource : DEFAULT_IMAGE} alt={title} />
      </div>
      <div className="title-price-container">
        <div className="title">{title}</div>
        <div className="price">{formatPrice(price)}</div>
      </div>
      <div className="delete-product">
        <span>x {quantity}</span>
        <MdOutlineDeleteForever className="icon" />
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.cardBasket};

  .image {
    border: 2px solid blue;
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
    border: 1px solid green;
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
      text-overflow: ellipsis;
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
    border: 1px solid red;

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
