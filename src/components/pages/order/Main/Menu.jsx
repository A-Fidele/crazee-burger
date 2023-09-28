import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import UserContext from "../../../../context/UserContext";
import EmptyMenuCustomer from "./MainRightSide/EmptyMenuCustomer";
import EmptyMenuAdmin from "./MainRightSide/EmptyMenuAdmin";
import { EMPTY_PRODUCT } from "../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    menu,
    isAdmin,
    setIsCollapsed,
    setCurrentTabSelected,
    handleDelete,
    productSelected,
    setProductSelected,
    inputEditRef,
  } = useContext(UserContext);

  if (menu.length === 0) {
    if (!isAdmin) return <EmptyMenuCustomer />;
    return <EmptyMenuAdmin />;
  }

  const checkProductIsClicked = (idProductedCliked, productSelected) => {
    return idProductedCliked === productSelected.id;
  };

  const handleSelectCard = async (idOfProductSelected) => {
    if (!isAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (data) => data.id === idOfProductSelected
    );
    await setProductSelected(productClickedOn);
    inputEditRef.current.focus();
  };

  //gestionnaire d'evenement
  const handleOnDelete = (id, event) => {
    event.stopPropagation();
    handleDelete(id);
    setProductSelected(EMPTY_PRODUCT);
  };

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdmin}
            onDelete={(event) => handleOnDelete(id, event)}
            onSelect={() => handleSelectCard(id)}
            ishoverable={isAdmin}
            isSelected={checkProductIsClicked(id, productSelected)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow: scroll;
  //grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .empty-menu-container {
    display: flex;
    width: 1400px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 200px;

    .empty-menu {
      margin-bottom: 30px;
      font-size: ${theme.fonts.size.P4};
      font-family: "Amatic SC";
      color: ${theme.colors.greySemiDark};
      font-weight: ${theme.fonts.weights.regular};

      .title {
        font-weight: ${theme.fonts.weights.bold};
      }
    }
  }

  .button {
    width: 224px;
    font-size: ${theme.fonts.size.XS};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
