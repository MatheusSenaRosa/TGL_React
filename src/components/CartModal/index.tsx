import { ArrowRight, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { CartList, Portal } from "@components";
import { useCartStore } from "@store";
import { formatNumericArray } from "@utils";

import * as S from "./styles";

type Props = {
  onClose: () => void;
  color: string;
};

export function CartModal({ onClose, color }: Props) {
  const { cart, removeFromCart } = useCartStore();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

  const onCloseHandler = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 500);
  };

  return (
    <Portal id="cart">
      <S.Container>
        <S.Overlay onClick={onCloseHandler} isClosing={isClosing} />
        <S.Modal isClosing={isClosing}>
          <S.XButton type="button" onClick={onCloseHandler} color={color}>
            <X size={32} weight="bold" />
          </S.XButton>
          <S.Header>
            <h2>CART</h2>
          </S.Header>
          <CartList data={cart} color={color} removeItem={removeHandler} />
          <S.SubmitButton color={color}>
            Save <ArrowRight weight="bold" />
          </S.SubmitButton>
        </S.Modal>
      </S.Container>
    </Portal>
  );
}
