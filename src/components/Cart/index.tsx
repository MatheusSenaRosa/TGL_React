import { setDoc, collection, doc, getDoc } from "firebase/firestore";
import { ArrowRight } from "phosphor-react";
import { useMemo } from "react";
import { toast } from "react-toastify";

import { CartList } from "@components";
import { ICart } from "@interfaces";
import { db, auth } from "@services";
import { useCartStore } from "@store";
import { formatNumericArray, formatPrice } from "@utils";

import * as S from "./styles";

type Props = {
  color: string;
  minValue: number;
};

export function Cart({ color, minValue }: Props) {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const cartCollection = collection(db, "cart");

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

  const saveHandler = async () => {
    if (total < minValue) {
      toast.warn(`The value must be greater than ${formatPrice(minValue)}`);
      return;
    }

    try {
      const prevCart = (
        await getDoc(doc(cartCollection, auth.currentUser?.uid))
      ).data() as { cart: ICart[] };

      if (!prevCart) {
        await setDoc(doc(cartCollection, auth.currentUser?.uid), {
          cart: [...cart],
        });
        clearCart();
        toast.success("Cart has been saved.");
        return;
      }

      await setDoc(doc(cartCollection, auth.currentUser?.uid), {
        cart: [...prevCart.cart, ...cart],
      });
      clearCart();
      toast.success("Cart has been saved.");
    } catch (e) {
      toast.error("An error has occurred. Try it later.");
    }
  };

  return (
    <S.Container>
      <S.Title>CART</S.Title>
      <CartList color={color} removeItem={removeHandler} data={cart} />
      <S.TotalWrapper>
        CART <span>TOTAL: {formatPrice(total)}</span>
      </S.TotalWrapper>
      <S.SubmitButton color={color} onClick={saveHandler}>
        Save
        <ArrowRight weight="bold" />
      </S.SubmitButton>
    </S.Container>
  );
}
