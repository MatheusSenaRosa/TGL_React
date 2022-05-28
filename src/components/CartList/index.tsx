import { Trash } from "phosphor-react";

import { ICart } from "@interfaces";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
  removeItem: (id: number, numbers: string[]) => void;
  data: ICart[];
};

export function CartList({ color, data, removeItem }: Props) {
  return (
    <S.List color={color} isEmpty={!data.length}>
      {!!data.length &&
        data.map((item) => (
          <S.Item
            color={item.color}
            key={formatNumericArray(item.numbers) + item.id}
          >
            <div>
              <button
                type="button"
                onClick={() => removeItem(item.id, item.numbers)}
              >
                <Trash size={30} />
              </button>
              <span color={item.color} />
            </div>
            <div>
              <p>{formatNumericArray(item.numbers)}</p>
              <h4>
                {item.name} <span>{formatPrice(item.price)}</span>
              </h4>
            </div>
          </S.Item>
        ))}
      {!data.length && <h3>Empty</h3>}
    </S.List>
  );
}
