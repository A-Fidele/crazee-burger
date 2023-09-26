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

    handleSelectCard: () => {},
    productSelected: {},
    setProductSelected: () => {},
    handleEdit: () => {},

    inputEditRef:{},
});