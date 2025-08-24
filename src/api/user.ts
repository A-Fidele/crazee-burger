import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId: string) => {
  const userDocRef = doc(db, "users", userId);

  onSnapshot(userDocRef,
    (doc) => console.log("ONLINE snapshot", doc.data()),
    (err) => console.error("Firestore error", err)
  );
  const docSnapshot = await getDoc(userDocRef)

  if (docSnapshot.exists()) {

    const userReceived = docSnapshot.data()
    return userReceived
  }
}

export const createUser = (userId: string) => {
  const docRef = doc(db, "users", userId)
  const newUser = {
    username: userId,
    menu: fakeMenu.LARGE,
  }
  setDoc(docRef, newUser)
}

export const authenticateUser = async (userId: string) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    createUser(userId);
  }
}
