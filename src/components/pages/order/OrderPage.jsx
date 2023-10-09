import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectIndexById } from "../../../utils/array";

export default function OrderPage() {
  const { username } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const { menu, handleEdit, handleAddProduct, handleDelete, resetMenu } =
    useMenu();
  const {
    basketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleEditBasket,
  } = useBasket();

  const inputEditRef = useRef();

  const handleSelectCard = async (idOfProductSelected) => {
    if (!isAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const indexOfProductClickedOn = findObjectIndexById(
      menu,
      idOfProductSelected
    );
    const productClickedOn = menu[indexOfProductClickedOn];
    await setProductSelected(productClickedOn);
    inputEditRef.current.focus();
  };

  const userContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    inputEditRef,
    basketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleSelectCard,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </UserContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
