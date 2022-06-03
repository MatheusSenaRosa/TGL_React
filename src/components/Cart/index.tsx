import { ArrowRight } from "phosphor-react";
import { useMemo } from "react";
import { toast } from "react-toastify";

import { CartList, Loading } from "@components";
import { useCartStore } from "@store";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
  isFetching: boolean;
  onSave: () => void;
};

export function Cart({ color, isFetching, onSave }: Props) {
  const { cart, removeFromCart } = useCartStore();

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.game.price, 0),
    [cart]
  );

  const removeHandler = (id: number, numbers: string[]) => {
    toast.dismiss();

    const index = cart.findIndex(
      (item) =>
        formatNumericArray(item.numbers) === formatNumericArray(numbers) &&
        item.game.id === id
    );

    removeFromCart(index);
    toast.success("Removed successfully.");
  };

  return (
    <S.Container>
      <S.Title>CART</S.Title>
      <CartList color={color} removeItem={removeHandler} data={cart} />
      <S.TotalWrapper>
        CART <span>TOTAL: {formatPrice(total)}</span>
      </S.TotalWrapper>
      <S.SubmitButton color={color} onClick={onSave} disabled={isFetching}>
        {isFetching ? (
          <Loading color={color} size={50} />
        ) : (
          <>
            Save
            <ArrowRight weight="bold" />
          </>
        )}
      </S.SubmitButton>
    </S.Container>
  );
}
