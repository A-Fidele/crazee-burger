import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { ProductType } from "../typeScript/ProductType";

export const updateMenuDb = (userId: string, newMenu: ProductType[]) => {
  const docRef = doc(db, "users", userId);
  const menuUpdated = {
    username: userId,
    menu: newMenu,
  };
  setDoc(docRef, menuUpdated);
};

export const getMenu = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }

};
