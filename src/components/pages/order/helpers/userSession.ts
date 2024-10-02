
import { getMenu } from "../../../../api/product"
import { ProductType } from "../../../../typeScript/ProductType";
import { getLocalStorage } from "../../../../utils/window"

const initialiseMenu = async (username: string, setMenu: (firestoreMenu: ProductType[]) => void) => {
  const firestoreMenu: ProductType[] = await getMenu(username)
  setMenu(firestoreMenu);
};

const initialiseBasket = (username: string, setBasketProduct: (basketReceived: ProductType[]) => void) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasketProduct(basketReceived);
};

export const initialiseUserSession = async (
  username: string,
  setMenu: (firestoreMenu: ProductType[]) => void,
  setBasketProduct: (basketReceived: ProductType[]) => void
) => {
  await initialiseMenu(username, setMenu);
  initialiseBasket(username, setBasketProduct);
};

