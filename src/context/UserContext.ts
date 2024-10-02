import { createContext } from "react";
import { ProductType } from "../typeScript/ProductType";

export default createContext({
    username: "",

    isAdmin: false,
    setIsAdmin: (isAdmin: boolean) => { },

    isCollapsed: false,
    setIsCollapsed: (isCollapsed: boolean) => { },

    currentTabSelected: "",
    setCurrentTabSelected: (tabSelected: string) => { },

    menu: [] as ProductType[],
    handleAddProduct: (username: string, newProduct: ProductType) => { },
    handleDelete: (username: string, id: string) => { },
    resetMenu: (username: string) => { },

    newProduct: {} as ProductType,
    setNewProduct: (newProduct: ProductType) => { },

    productSelected: <ProductType>{},
    setProductSelected: (EMPTY_PRODUCT: ProductType) => { },
    handleEdit: (productWithPriceUpdated: ProductType, username: string) => { },
    handleSelectCard: (id: string) => { },

    inputEditRef: {} as React.MutableRefObject<HTMLInputElement | null>,

    basketProduct: [] as ProductType[],
    setBasketProduct: (basketProductUpdated: ProductType[]) => { },

    handleAddToBasket: (productToAdd: ProductType, username: string) => { },
    handleDeleteBasketProduct: (id: string, username: string) => { },
});