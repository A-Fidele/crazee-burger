import { useContext } from "react";
import styled from "styled-components";
import EmptyMenuCustomer from "./EmptyMenuCustomer";
import EmptyMenuAdmin from "./EmptyMenuAdmin";

import Loading from "./Loading";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import UserContext from "../../../../../../context/UserContext";
import { findObjectById, isEmpty, isUndefined } from "../../../../../../utils/array";
import { DEFAULT_IMAGE, EMPTY_PRODUCT, ProductType } from "../../../../../../enums/product";
import { convertStringToBoolean } from "../../../../../../utils/string";
import Card from "../../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../../utils/maths";
import { theme } from "../../../../../../theme";
import { cardMenuAnimation } from "../../../../../../theme/animations";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";

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
    resetMenu,
  } = useContext(UserContext);

  if (isUndefined(menu)) return <Loading className={"menu"} />;

  if (isEmpty(menu)) {
    if (!isAdmin) return <EmptyMenuCustomer />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  const checkProductIsClicked = (idProductedCliked: string, productSelected: ProductType): boolean => {
    return idProductedCliked === productSelected.id;
  };

  //gestionnaire d'evenement
  const handleOnDelete = (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleDelete(username, id);
    handleDeleteBasketProduct(id, username);
    setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.stopPropagation();
    const productToAdd = findObjectById(menu, id);
    handleAddToBasket(productToAdd, username);
  };

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          return (
            <CSSTransition
              appear
              classNames={"card-menu"}
              key={id}
              timeout={{ enter: 1000, exit: 300 }}
            >
              <div
                className={
                  isAdmin
                    ? "card-container-admin is-hoverable"
                    : "card-container"
                }
              >
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
                <Card
                  key={id}
                  title={title}
                  imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
                  leftDescription={formatPrice(price)}
                  hasDeleteButton={isAdmin}
                  onDelete={(event: React.MouseEvent<HTMLButtonElement>) => handleOnDelete(id, event)}
                  onSelect={() => handleSelectCard(id)}
                  isHoverable={isAdmin}
                  isSelected={checkProductIsClicked(id, productSelected)}
                  handleAddProduct={(event: React.MouseEvent<HTMLButtonElement>) => handleAddProduct(event, id)}
                  isOverLap={convertStringToBoolean(isAvailable) === false}
                />
              </div>
            </CSSTransition>
          );
        }
      )}
    </TransitionGroup>
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

  ${cardMenuAnimation}
  ${ribbonAnimation}

  .card-container {
    position: relative;

    .ribbon {
      z-index: 2;
    }
  }

  .card-container-admin {
    position: relative;
    &:hover {
      transform: scale(1.05);
      transition: ease-out 0.4s;
    }
    .ribbon {
      z-index: 2;
    }
  }

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
