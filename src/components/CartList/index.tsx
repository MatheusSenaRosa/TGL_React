import { Trash } from "phosphor-react";
import { useState } from "react";

import { ICart } from "@interfaces";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
  removeItem: (id: number, numbers: string[]) => void;
  data: ICart[];
};

type RemovingItem = {
  id: number | null;
  numbers: string | null;
};

export function CartList({ color, data, removeItem }: Props) {
  const [removingItem, setRemovingItem] = useState<RemovingItem>(
    {} as RemovingItem
  );

  const removeHandler = (id: number, numbers: string[]) => {
    const formattedNumbers = formatNumericArray(numbers);
    setRemovingItem({ id, numbers: formattedNumbers });

    setTimeout(() => {
      removeItem(id, numbers);
      setRemovingItem({ id: null, numbers: null });
    }, 300);
  };

  return (
    <S.List color={color} isEmpty={!data.length}>
      {!!data.length &&
        data.map((item) => (
          <S.Item
            color={item.color}
            key={formatNumericArray(item.numbers) + item.id}
            isRemoving={
              item.id === removingItem.id &&
              formatNumericArray(item.numbers) === removingItem.numbers
            }
          >
            <div>
              <button
                type="button"
                onClick={() => removeHandler(item.id, item.numbers)}
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
