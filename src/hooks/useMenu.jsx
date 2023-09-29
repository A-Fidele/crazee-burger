import { useState } from "react";
import { LARGE } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(LARGE);
  const handleEdit = (productEdit) => {
    const menuCopy = deepClone(menu);
    const indexProduct = menu.findIndex((data) => data.id === productEdit.id);
    menuCopy[indexProduct] = productEdit;
    setMenu(menuCopy);
  };

  const handleAddProduct = (newProduct) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = [newProduct, ...copyMenu];
    setMenu(menuUpdated);
  };

  //gestionnaire de state
  const handleDelete = (id) => {
    const menuUpdated = menu.filter((data) => data.id !== id);
    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(LARGE);
  };

  return {
    menu,
    setMenu,
    handleEdit,
    handleAddProduct,
    handleDelete,
    resetMenu,
  };
};
