import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import UserContext from "../../../../context/UserContext";
import EmptyMenuCustomer from "./MainRightSide/EmptyMenuCustomer";
import EmptyMenuAdmin from "./MainRightSide/EmptyMenuAdmin";
import { DEFAULT_IMAGE, EMPTY_PRODUCT } from "../../../../enums/product";
import { findObjectById, isEmpty, isUndefined } from "../../../../utils/array";
import Loading from "./Loading";

export default function Menu() {
  const {
    username,
    menu,
    isAdmin,
    handleDelete,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleSelectCard,
    handleDeleteBasketProduct,
  } = useContext(UserContext);

  if (isUndefined(menu)) return <Loading className={"menu"} />;

  if (isEmpty(menu)) {
    if (!isAdmin) return <EmptyMenuCustomer />;
    return <EmptyMenuAdmin />;
  }

  const checkProductIsClicked = (idProductedCliked, productSelected) => {
    return idProductedCliked === productSelected.id;
  };

  //gestionnaire d'evenement
  const handleOnDelete = (id, event) => {
    event.stopPropagation();
    handleDelete(username, id);
    handleDeleteBasketProduct(id, username);
    setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddProduct = (event, id) => {
    event.stopPropagation();
    const productToAdd = findObjectById(menu, id);
    handleAddToBasket(productToAdd, username);
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
            handleAddProduct={(event) => handleAddProduct(event, id)}
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
      font-family: ${theme.fonts.family.Amatic}, cursive;
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
