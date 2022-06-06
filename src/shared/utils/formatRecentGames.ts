import { IRecentGames, IFormattedRecentGames } from "@interfaces";

export const formatRecentGames = (data: IRecentGames[]) => {
  const formattedData = data.reduce((acc, cur) => {
    const index = acc.findIndex((item) => item.name === cur.game.name);
    const newAcc = [...acc];

    if (index === -1) {
      newAcc.push({
        name: cur.game.name,
        color: cur.game.color,
        items: [cur],
      });
    } else {
      newAcc[index].items = [...newAcc[index].items, cur];
    }

    return newAcc;
  }, [] as IFormattedRecentGames[]);

  return formattedData;
};
