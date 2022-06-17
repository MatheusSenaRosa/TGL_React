import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import { IRecentGames } from "@interfaces";

import { auth, db } from "./config";

interface IReturn {
  games: IRecentGames[];
}

export const getRecentGamesCollection = async (): Promise<IReturn> => {
  const recentGames = collection(db, "recentGames");

  const cart = await getDoc(doc(recentGames, auth.currentUser?.uid));

  return cart.data() as IReturn;
};

export const setRecentGamesCollection = async (data: IRecentGames[]) => {
  const recentGames = collection(db, "recentGames");

  await setDoc(doc(recentGames, auth.currentUser?.uid), {
    games: data,
  });
};
