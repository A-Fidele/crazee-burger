import styled, { css } from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onSelect,
  ishoverable,
  isSelected,
}) {
  return (
    <CardStyled
      className={hasDeleteButton && "delete-icon"}
      $ishoverable={ishoverable}
      onClick={onSelect}
    >
      <div className={hasDeleteButton && isSelected ? "selected-card" : "card"}>
        {hasDeleteButton && (
          <button className="delete-icon" onClick={onDelete}>
            <TiDelete className="icon" />
          </button>
        )}
        <div className="image">
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
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ $ishoverable }) => $ishoverable && hoverableStyle}
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

    &.delete-button {
      background: ${theme.colors.primary};
      width: 200px;
      height: 300px;
      display: grid;
      grid-template-rows: 65% 1fr;
      padding: 20px;
      padding-bottom: 10px;
      box-shadow: ${theme.shadows.medium};
      border-radius: ${theme.borderRadius.extraRound};
    }

    .delete-icon {
      height: 30px;
      width: 30px;
      border: none;
      background-color: ${theme.colors.white};
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      right: 0;
      margin: 24px;
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
        font-family: "Amatic SC", cursive;
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
            cursor: pointer;
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

    &.delete-button {
      background: ${theme.colors.primary};
      width: 200px;
      height: 300px;
      display: grid;
      grid-template-rows: 65% 1fr;
      padding: 20px;
      padding-bottom: 10px;
      box-shadow: ${theme.shadows.medium};
      border-radius: ${theme.borderRadius.extraRound};
    }

    .delete-icon {
      height: 30px;
      width: 30px;
      border: none;
      background-color: ${theme.colors.primary};
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      right: 0;
      margin: 15px;
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
        font-family: "Amatic SC", cursive;
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
            cursor: pointer;
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
    color: white;
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
    font-size: ${theme.fonts.size.sm};
    font-weight: ${theme.fonts.weights.heavy};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;

    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    }
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;
