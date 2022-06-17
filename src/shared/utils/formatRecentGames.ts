import { ICart } from "./interfaces/cart";

export const formatDateRecentGames = (games: ICart[]) => {
  const formatted = games.map((item) => ({
    ...item,
    createdAt: new Date().toLocaleDateString("pt-br"),
  }));

  return formatted;
};
