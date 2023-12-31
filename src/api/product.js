import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const updateMenuDb = (userId, newMenu) => {
  const docRef = doc(db, "users", userId);
  const menuUpdated = {
    username: userId,
    menu: newMenu,
  };
  setDoc(docRef, menuUpdated);
};

export const getMenu = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef)//uncaught in promise

  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu; 
  } 

};
