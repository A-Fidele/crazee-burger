import { createContext } from "react";

export default createContext({
    isAdmin: false,
    setIsAdmin: () => { },

    isCollapsed: false,
    setIsCollapsed: () => { },

    currentTabSelected: false,
    setCurrentTabSelected: () => { },

    menu: [],
    handleAddProduct: (newProduct) => { },
    handleDelete: (title) => { },
    resetMenu: () => {},

    newProduct: {},
    setNewProduct: () => {},

    productSelected: {},
    setProductSelected: () => {},
    handleEdit: () => {},

    inputEditRef:{},

    basketProduct: [],
    setBasketProduct: () => {},

    handleAddToBasket: (idOfProducToAdd) => {},
    handleDeleteBasketProduct: (idProductToDelete) => {},
});