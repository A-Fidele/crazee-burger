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
        <div className="left-info">
          <div className="title">
            <span className="burger-title">{title}</span>
          </div>
          <div className="price">{formatPrice(price)}</div>
        </div>
        <div className="delete-product">
          <span className="quantity">x {quantity}</span>
          <MdOutlineDeleteForever className="icon" />
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  //border: 2px solid black;
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.cardBasket};
  padding: 8px 16px 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;
  position: relative;
  box-sizing: border-box;

  .image {
    //border: 2px solid blue;
    box-sizing: border-box;
    width: 85px;
    height: 70px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 5px;
      object-fit: contain;
    }
  }

  .title-price-container {
    //border: 1px solid green;
    box-sizing: border-box;
    height: 100%;
    width: 130px;
    margin-left: 20px;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
    }
    .title {
      //box-sizing: border-box;
      border: 1px solid green;
      line-height: 32px;
      width: 100px;
      align-items: center;
      font-size: ${theme.fonts.size.P3};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      //overflow: hidden;
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      .burger-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
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
    //border: 1px solid red;
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
    .quantity {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.medium};
      font-family: "Open sans";
      box-sizing: border-box;
      justify-content: flex-end;
    }
  }
`;
