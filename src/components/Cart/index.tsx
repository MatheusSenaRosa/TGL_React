import { ArrowRight, Trash } from "phosphor-react";

import { useCartStore } from "@store";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
};

export function Cart({ color }: Props) {
  const { cart } = useCartStore();

  return (
    <S.Container>
      <S.Title>CART</S.Title>
      <S.List color={color}>
        {cart.map((item) => (
          <S.Item
            color={item.color}
            key={formatNumericArray(item.numbers) + item.id}
          >
            <button type="button">
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
      </S.List>
      <S.TotalWrapper>
        CART <span>TOTAL: R$ 7,00</span>
      </S.TotalWrapper>
      <S.SubmitButton color={color}>
        Save
        <ArrowRight weight="bold" />
      </S.SubmitButton>
    </S.Container>
  );
}
