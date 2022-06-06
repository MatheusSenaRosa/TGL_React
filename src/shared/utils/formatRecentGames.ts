import { IRecentGames } from "@interfaces";

type FormattedRecentGames = {
  name: string;
  items: IRecentGames[];
};

export const formatRecentGames = (data: IRecentGames[]) => {
  const formattedData = data.reduce((acc, cur) => {
    const index = acc.findIndex((item) => item.name === cur.game.name);
    const newAcc = [...acc];

    if (index === -1) {
      newAcc.push({
        name: cur.game.name,
        items: [cur],
      });
    } else {
      newAcc[index].items = [...newAcc[index].items, cur];
    }

    return newAcc;
  }, [] as FormattedRecentGames[]);

  return formattedData;
};
