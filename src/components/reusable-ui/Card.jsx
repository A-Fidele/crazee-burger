import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasButton,
  onDelete,
}) {
  const { isAdmin, isCollapsed, setIsCollapsed, setCurrentTabSelected } =
    useContext(UserContext);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [adminClassName, setAdminClassName] = useState("delete-button");

  const handleClick = () => {
    setIsCollapsed(false);
    setCurrentTabSelected("edit");
    setIsCardSelected(true);
  };

  return (
    <CardStyled className={isAdmin && adminClassName} onClick={handleClick}>
      {hasButton && (
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
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  &:active {
    &.delete-button {
      background-color: ${theme.colors.primary};
    }
  }

  &.delete-button {
    background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    &:active {
      background: orange;
    }

    &:hover {
      width: 210px;
      height: 315px;
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }
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
    margin: 15px;
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
    //border: 1px solid red;
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
`;
