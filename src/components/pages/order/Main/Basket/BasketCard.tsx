import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";
import { DEFAULT_IMAGE } from "../../../../../enums/product";
import CasinoEffect from "../../../../reusable-ui/CasinoEffect";

type BasketCardType = {
  title: string,
  imageSource: string,
  price: string,
  quantity: number,
  onDelete: (event: React.MouseEvent<HTMLElement>) => void,
  isClickable: boolean,
  onSelect: () => void,
  isSelected: boolean,
}

export default function BasketCard({
  title,
  imageSource,
  price,
  quantity,
  onDelete,
  isClickable,
  onSelect,
  isSelected,
}: BasketCardType) {
  return (
    <BasketCardStyled
      $isClickable={isClickable}
      onClick={onSelect}
      className={isClickable && isSelected ? "card-selected" : ""}
    >
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
      <div className="image">
        <img src={imageSource ? imageSource : DEFAULT_IMAGE} alt={title} />
      </div>
      <div className="text-info">
        <div className="left-info">
          <div className="title">
            <span>{title}</span>
          </div>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <CasinoEffect text={"x "} count={quantity} />
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div<{ $isClickable: boolean }>`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "auto")};
  box-sizing: border-box;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};
  position: relative;

  @supports (-webkit-margin-start: 0) or (margin-inline-start: 0) {
    margin-inline-start: 8px;
    margin-inline-end: 16px;
    margin-block-start: 20px;
    margin-block-end: 20px;
    padding-inline-start: initial;
    padding-inline-end: initial;
    padding-block-start: initial;
    padding-block-end: initial;
  }

  &.card-selected {
    background-color: ${theme.colors.primary};

    .price {
      color: ${theme.colors.white};
    }

    .quantity {
      color: ${theme.colors.white};
    }
  }

  .image {
    box-sizing: border-box;
    height: 70px;

    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
      margin-top: 8px;
      margin-left: 10px;
    }
  }

  .text-info {
    height: 70px;
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .left-info {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;
      box-sizing: border-box;

      .title {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-family: ${theme.fonts.family.Amatic};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        height: 32px;
        margin-top: 15px;
        min-width: 0;

        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .price {
        margin-top: 4px;
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.medium};
        font-family: "Open sans";
      }
    }

    .quantity {
      margin-top: 20px;
      box-sizing: border-box;
      font-weight: ${theme.fonts.weights.medium};
      display: flex;
      align-items: center;
      margin-right: 18px;
      margin-left: 11px;
      font-size: ${theme.fonts.size.SM};
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }

  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`;
