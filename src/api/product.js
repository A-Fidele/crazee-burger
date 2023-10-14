import {doc, getDoc, setDoc, updateDoc} from "firebase/firestore"
import { db } from "./firebase-config"

export const updateMenuDb = (userId, newMenu) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: newMenu,
    }
    setDoc(docRef,newDoc)
}

export const getMenu = async (userId ) => {
 const docRef = doc(db, "users", userId)
 const docSnapshot = await getDoc(docRef)
 
 if (docSnapshot.exists()) {
     const { menu } = docSnapshot.data()
     return menu
 }
}

