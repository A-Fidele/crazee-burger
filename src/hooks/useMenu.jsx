import { useState } from "react";
import {
  deepClone,
  findObjectIndexById,
  removeObjectById,
} from "../utils/array";
import { updateMenuDb } from "../api/product";
import { useParams } from "react-router-dom";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenu = () => {
  const [menu, setMenu] = useState();
  const { username } = useParams();

  const handleEdit = async (productEdit) => {
    const menuCopy = deepClone(menu);
    const indexProduct = findObjectIndexById(menu, productEdit.id);
    menuCopy[indexProduct] = productEdit;

    await updateMenuDb(username, menuCopy);

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
    setMenu(fakeMenu.LARGE);
    updateMenuDb(username, fakeMenu.LARGE);
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
