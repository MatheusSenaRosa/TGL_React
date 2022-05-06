import { useState } from "react";
import { useCartStore } from "@store/useCartStore";
import { priceFormatter } from "@utils/index";
import * as S from "./styles";

type Props = {
  numbers: string;
  type: string;
  color: string;
  price: number;
  id: number;
  animationRemove: () => void;
};

export const CartItem = ({
  color,
  numbers,
  type,
  price,
  id,
  animationRemove,
}: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const { removeFromCart } = useCartStore();

  const removeItemHandler = () => {
    setIsRemoving(true);
    animationRemove();
    setTimeout(() => {
      setIsRemoving(false);
      animationRemove();
      removeFromCart(id, numbers);
    }, 300);
  };

  return (
    <div className="cartItem">
      <S.Item color={color} isRemoving={isRemoving}>
        <div onClick={removeItemHandler}>
          <S.TrashIcon size={27} />
        </div>
        <S.ColoredDivisor color={color} />
        <div>
          <p>{numbers}</p>
          <h5>
            {type} <span>{priceFormatter(price)}</span>
          </h5>
        </div>
      </S.Item>
    </div>
  );
};
