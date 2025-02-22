import React from "react";
import styled, { css } from "styled-components";
import { TiDelete } from "react-icons/ti";
import { OUT_OF_STOCK_IMAGE } from "../../enums/product";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { fadeInRight, fadeInTop } from "../../theme/animations";

type CardProps = {
  title: string,
  imageSource: string,
  leftDescription: string,
  hasDeleteButton: boolean,
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void,
  onSelect: (id: string) => void,
  isHoverable: boolean,
  isSelected: boolean,
  handleAddProduct: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isOverLap: boolean,
}
export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onSelect,
  isHoverable,
  isSelected,
  handleAddProduct,
  isOverLap,
}: CardProps) {
  return (
    <CardStyled
      className={hasDeleteButton ? "delete-icon" : undefined}
      $isHoverable={isHoverable}
      onClick={() => onSelect(title)}
    >
      <div className={hasDeleteButton && isSelected ? "selected-card" : "card"}>
        {hasDeleteButton && (
          <button className="delete-icon" onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            onDelete(event);
          }}>
            <TiDelete className="icon" />
          </button>
        )}
        <div className="image">
          {isOverLap && (
            <div className="overlap-container">
              <div className="layer"> </div>
              <img
                className="outofstock-img"
                src={OUT_OF_STOCK_IMAGE}
                alt={"outofstock"}
              />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div
              className={
                hasDeleteButton && isSelected
                  ? "selected-card-left-description"
                  : "left-description"
              }
            >
              {leftDescription}
            </div>
            <div className="right-description">
              <PrimaryButton
                className={
                  hasDeleteButton && isSelected
                    ? "selected-card-button"
                    : "primary-button"
                }
                version="classic"
                label={"Ajouter"}
                onClick={(event) => handleAddProduct(event)}
                disabled={isOverLap}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div<{ $isHoverable: boolean }>`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  height: 330px;
  border-radius: ${theme.borderRadius.extraRound};

  .card {
    background: ${theme.colors.white};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-icon {
      z-index: 2;
      height: 30px;
      width: 30px;
      border: none;
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      background-color: transparent;
      top: 15px;
      right: 15px;
      padding: 0;
      animation: ${fadeInRight} 500ms ease-out;
    }

    .icon {
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};

      :hover {
        color: ${theme.colors.red};
        cursor: pointer;
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .overlap-container {
        .layer {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          border-radius: ${theme.borderRadius.extraRound};
        }
        .outofstock-img {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
          animation: ${fadeInTop} 500ms;
        }
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.Amatic}, cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
          }
        }
      }
    }
  }

  .selected-card {
    background: ${theme.colors.primary};
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-icon {
      z-index: 2;
      height: 30px;
      width: 30px;
      border: none;
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      background-color: transparent;
      top: 15px;
      right: 15px;
      padding: 0;
      animation: ${fadeInRight} 500ms ease-out;
    }

    .icon {
      width: 30px;
      height: 30px;
      color: ${theme.colors.white};

      :hover {
        color: ${theme.colors.red};
        cursor: pointer;
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .overlap-container {
        .layer {
          z-index: 1;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          border-radius: ${theme.borderRadius.extraRound};
        }
        .outofstock-img {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
          animation: ${fadeInTop} 500ms;
        }
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.Amatic}, cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            color: white;
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
          }
        }
      }
    }
  }

  .selected-card-left-description {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: ${theme.fonts.weights.medium};
    color: ${theme.colors.white};
  }

  .selected-card-button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    height: 38px;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.heavy};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    }
  }
`;

const hoverableStyle = css`
  &:hover {
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;
