import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import { ICart } from "@interfaces";

import { auth, db } from "./config";

interface IReturn {
  cart: ICart[];
}

export const getCartCollection = async (): Promise<IReturn> => {
  const cartCollection = collection(db, "cart");

  const cart = await getDoc(doc(cartCollection, auth.currentUser?.uid));

  return cart.data() as IReturn;
};

export const setCartCollection = async (data: ICart[]) => {
  const cartCollection = collection(db, "cart");

  await setDoc(doc(cartCollection, auth.currentUser?.uid), {
    cart: data,
  });
};
