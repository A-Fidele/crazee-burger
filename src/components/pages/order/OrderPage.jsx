import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UserContext from "../../../context/UserContext";
import { useState } from "react";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { emptyProduct } from "./Main/MainRightSide/Admin/AddForm";

export default function OrderPage() {
  const { username } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState(emptyProduct);

  const handleAddProduct = (newProduct) => {
    const copyMenu = [...menu];    
    const menuUpdated = [newProduct,...copyMenu];
    setMenu(menuUpdated)
}

const handleDelete = (title) => {
  const copyMenu = [...menu];
  const menuUpdated = copyMenu.filter(data => data.title !== title)
  setMenu(menuUpdated)
}

const resetMenu = () => {
  setMenu(fakeMenu2)
}

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
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
