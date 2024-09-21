import { createContext } from "react";
import { ProductType } from "../enums/product";

export default createContext({
    username: "",

    isAdmin: false,
    setIsAdmin: () => { },

    isCollapsed: false,
    setIsCollapsed: (isCollapsed: boolean) => { },

    currentTabSelected: "",
    setCurrentTabSelected: (tabSelected: string) => { },

    menu: [] as ProductType[],
    handleAddProduct: () => { },
    handleDelete: (username: string, id: string) => { },
    resetMenu: (username: string) => { },

    newProduct: {},
    setNewProduct: () => { },

    productSelected: <ProductType>{},
    setProductSelected: (EMPTY_PRODUCT: ProductType) => { },
    handleEdit: () => { },
    handleSelectCard: (id: string) => { },

    inputEditRef: {},

    basketProduct: [] as ProductType[],
    setBasketProduct: () => { },

    handleAddToBasket: (productToAdd: ProductType, username: string) => { },
    handleDeleteBasketProduct: (id: string, username: string) => { },
});