import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import {
  deepClone,
  findObjectIndexById,
  removeObjectById,
} from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleEdit = (productEdit) => {
    const menuCopy = deepClone(menu);
    const indexProduct = findObjectIndexById(menu, productEdit.id);
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
    const menuUpdated = removeObjectById(menu, id);
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
