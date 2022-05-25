import { useMemo } from "react";

import { ArrowRight, Trash } from "phosphor-react";
import { toast } from "react-toastify";

import { useCartStore } from "@store";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
};

export function Cart({ color }: Props) {
  const { cart, removeFromCart } = useCartStore();

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price, 0),
    [cart]
  );

  const removeHandler = (id: number, numbers: string[]) => {
    toast.dismiss();

    const index = cart.findIndex(
      (item) =>
        formatNumericArray(item.numbers) === formatNumericArray(numbers) &&
        item.id === id
    );

    removeFromCart(index);
    toast.success("Removed successfully.");
  };

  return (
    <S.Container>
      <S.Title>CART</S.Title>
      <S.List color={color} isEmpty={!cart.length}>
        {!!cart.length &&
          cart.map((item) => (
            <S.Item
              color={item.color}
              key={formatNumericArray(item.numbers) + item.id}
            >
              <button
                type="button"
                onClick={() => removeHandler(item.id, item.numbers)}
              >
                <Trash size={30} />
              </button>
              <span color={item.color} />
              <div>
                <p>{formatNumericArray(item.numbers)}</p>
                <h4>
                  {item.name} <span>{formatPrice(item.price)}</span>
                </h4>
              </div>
            </S.Item>
          ))}
        {!cart.length && <h3>Empty</h3>}
      </S.List>
      <S.TotalWrapper>
        CART <span>TOTAL: {formatPrice(total)}</span>
      </S.TotalWrapper>
      <S.SubmitButton color={color}>
        Save
        <ArrowRight weight="bold" />
      </S.SubmitButton>
    </S.Container>
  );
}
