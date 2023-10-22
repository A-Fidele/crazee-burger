
import { getMenu } from "../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"

 const initialiseMenu = async (username, setMenu) => {  
   const firestoreMenu = await getMenu(username)   
   setMenu(firestoreMenu);
 };

const initialiseBasket = (username, setBasketProduct) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasketProduct(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasketProduct) => {
    await initialiseMenu(username, setMenu);
    initialiseBasket(username,setBasketProduct);
  };

