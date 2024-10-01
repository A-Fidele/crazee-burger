import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findObjectIndexById, removeObjectById } from "../utils/array";
import { updateMenuDb } from "../api/product";
import { ProductType } from "../typeScript/ProductType";

export const useMenu = () => {
  const [menu, setMenu] = useState<ProductType[]>([]);

  const handleEdit = async (productEdit: ProductType, username: string) => {
    const menuCopy = deepClone(menu);
    const indexProduct = findObjectIndexById(menu, productEdit.id);
    menuCopy[indexProduct] = productEdit;
    setMenu(menuCopy);

    updateMenuDb(username, menuCopy);
  };

  const handleAddProduct = (username: string, newProduct: ProductType) => {
    const copyMenu = deepClone(menu);
    const menuUpdated = [newProduct, ...copyMenu];
    updateMenuDb(username, menuUpdated);
    setMenu(menuUpdated);
  };

  //gestionnaire de state
  const handleDelete = (username: string, id: string) => {
    const menuUpdated = removeObjectById(menu, id);
    updateMenuDb(username, menuUpdated);
    setMenu(menuUpdated);
  };

  const resetMenu = (username: string) => {
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
