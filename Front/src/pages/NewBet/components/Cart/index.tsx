import { useState } from "react";
import { toast } from "react-toastify";
import { CartItem } from "../CartItem";
import { useCartStore } from "@store/index";
import { priceFormatter } from "@utils/index";
import { betsServices } from "@services/index";
import * as S from "./styles";

type Props = {
  minValue: number;
  isAdding: boolean;
};

export const Cart = ({ minValue, isAdding }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const { cart, clearCart } = useCartStore();
  const { newBet } = betsServices();

  const calculateTotal = () => {
    return cart.reduce((acc, cur) => acc + cur.price, 0);
  };

  const saveHandler = async () => {
    const min = priceFormatter(minValue);
    const leftValue = priceFormatter(minValue - calculateTotal());

    if (calculateTotal() < minValue) {
      toast.error(`The min value that you can buy is ${min}.`);
      toast.error(`Missing ${leftValue}.`);
      return;
    }

    const formattedCart = cart.map((item) => ({
      game_id: item.id,
      numbers: item.numbers.split(", ").map((item) => Number(item)),
    }));

    try {
      await newBet({ games: [...formattedCart] });
      clearCart();
      toast.success(`
You have successfully purchased your bets!`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <h3>Cart</h3>
      {!cart.length && <S.EmptyText>Your cart is empty.</S.EmptyText>}
      {!!cart.length && (
        <S.List isRemoving={isRemoving} isAdding={isAdding}>
          {cart.map((item) => (
            <CartItem
              id={item.id}
              color={item.color}
              numbers={item.numbers}
              price={item.price}
              type={item.type}
              key={item.numbers + item.id}
              animationRemove={() => setIsRemoving((prev) => !prev)}
            />
          ))}
        </S.List>
      )}

      <S.TotalText>
        CART <span>TOTAL: {priceFormatter(calculateTotal())}</span>
      </S.TotalText>

      <S.SaveButton onClick={saveHandler}>
        Save
        <S.ArrowIcon />
      </S.SaveButton>
    </S.Container>
  );
};
