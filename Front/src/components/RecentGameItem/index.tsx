import { priceFormatter } from "@utils/index";

import * as S from "./styles";

type Props = {
  name: string;
  color: string;
  numbers: string;
  date: Date;
  price: number;
};

export const RecentGameItem = ({
  color,
  name,
  numbers,
  date,
  price,
}: Props) => {
  const formatDate = () => {
    const humanDate = date
      .toString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    return humanDate;
  };

  const formatNumbers = () => {
    const formated = numbers
      .split(",")
      .map((item) => (+item < 10 ? `0${item}` : item))
      .join(", ");

    return formated;
  };

  return (
    <S.Item>
      <S.ColoredBorder color={color} />
      <div>
        <S.Numbers>{formatNumbers()}</S.Numbers>
        <S.DateAndPrice>
          {formatDate()} - ({priceFormatter(price)})
        </S.DateAndPrice>
        <S.GameName color={color}>{name}</S.GameName>
      </div>
    </S.Item>
  );
};
