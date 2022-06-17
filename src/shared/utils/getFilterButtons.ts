import { IRecentGames, IFilterButton } from "@interfaces";

export const getFilterButtons = (data: IRecentGames[]) => {
  console.log(data);
  const buttons = data.reduce((acc, cur) => {
    const alreadyExists = acc.find((item) => item.id === cur.game.id);
    if (alreadyExists) return acc;

    return [
      ...acc,
      {
        name: cur.game.name,
        color: cur.game.color,
        id: cur.game.id,
      },
    ];
  }, [] as IFilterButton[]);

  return buttons;
};
