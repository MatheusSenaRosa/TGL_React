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

type IsRemoving = {
  index: number;
  isRemoving: boolean;
};

export function CartList({ color, data, removeItem }: Props) {
  const [isRemoving, setIsRemoving] = useState<IsRemoving>({
    isRemoving: false,
    index: 0,
  });

  const removeHandler = (id: number, numbers: string[], index: number) => {
    setIsRemoving({ isRemoving: true, index });

    setTimeout(() => {
      setIsRemoving({ isRemoving: false, index: 0 });
      removeItem(id, numbers);
    }, 300);
  };
  return (
    <S.List color={color} isEmpty={!data.length}>
      {!!data.length &&
        data.map((item, index) => (
          <S.Item
            color={item.color}
            key={formatNumericArray(item.numbers) + item.id}
            isRemoving={isRemoving.isRemoving && isRemoving.index === index}
          >
            <div>
              <button
                type="button"
                onClick={() => removeHandler(item.id, item.numbers, index)}
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
