import { Params, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectIndexById } from "../../../utils/array";
import { initialiseUserSession } from "./helpers/userSession";

export default function OrderPage() {
  const { username }: Readonly<Params<string>> = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const {
    menu,
    handleEdit,
    handleAddProduct,
    handleDelete,
    resetMenu,
    setMenu,
  } = useMenu();
  const {
    basketProduct,
    setBasketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useBasket();

  const inputEditRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  const handleSelectCard = async (idOfProductSelected: string) => {
    if (!isAdmin) return;
    setIsCollapsed(false);
    setCurrentTabSelected("edit");

    const indexOfProductClickedOn = findObjectIndexById(
      menu,
      idOfProductSelected
    );

    const productClickedOn = menu[indexOfProductClickedOn];
    setProductSelected(productClickedOn);
    if (inputEditRef.current) inputEditRef.current.focus();
  };

  useEffect(() => {
    username && initialiseUserSession(username, setMenu, setBasketProduct);
  }, []);

  const userContextValue = {
    username: username || "",
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
    setBasketProduct,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleSelectCard,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username || ""} />
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
