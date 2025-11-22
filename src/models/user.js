import { db } from "./firebase.js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const userColecction = collection(db, "users");

export const creatUser = async (email, passwordHash) => {
  try {
    const docRef = await addDoc(userColecction, { email, password: passwordHash });
    return { id: docRef.id, email };
  } catch (error) {
    console.log(error);
  }
};

export const findUserByEmail = async (email) => {
    try {
        const q = query(userColecction, where("email", "==", email))
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            return { id: doc.id, ...doc.data()}
        } else {
            return null;
        }
  } catch (error) {
      console.log(error)
  }
};
