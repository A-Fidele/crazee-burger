import { useState } from "react";
import {
  deepClone,
  findObjectIndexById,
  removeObjectById,
} from "../utils/array";
import { updateMenuDb } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState();

  const handleEdit = (productEdit) => {
    const menuCopy = deepClone(menu);
    const indexProduct = findObjectIndexById(menu, productEdit.id);
    menuCopy[indexProduct] = productEdit;

    setMenu(menuCopy);
  };

  const handleAddProduct = (username, newProduct) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = [newProduct, ...copyMenu];
    updateMenuDb(username, menuUpdated);
    setMenu(menuUpdated);
  };

  //gestionnaire de state
  const handleDelete = (username, id) => {
    const menuUpdated = removeObjectById(menu, id);
    updateMenuDb(username, menuUpdated);
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
