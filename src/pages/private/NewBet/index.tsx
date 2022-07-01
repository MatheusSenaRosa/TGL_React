import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";

import {
  Cart,
  CartModal,
  Loading,
  PrivatedScreen,
  SelectGameButton,
} from "@components";
import { getRecentGamesCollection, setRecentGamesCollection } from "@services";
import { useCartStore } from "@store";
import {
  calculateTotal,
  formatNumericArray,
  formatPrice,
  numberToString,
  formatDateRecentGames,
} from "@utils";

import * as S from "./styles";
import { NewBetContextProvider, useNewBet } from "./useNewBet";

export function NewBetElement() {
  const {
    games,
    currentBet,
    isLoading,
    numericArray,
    cart,
    onClickNumber,
    clearGame,
    completeGame,
    changeGame,
    addToCart,
    clearCart,
  } = useNewBet();
  const [isCartModal, setIsCartModal] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  // const { cart, addToCart, clearCart } = useCartStore();

  const addToCartHandler = () => {
    const {
      selectedNumbers: { length },
      game: { max_number, color, id, price, name },
    } = currentBet;
    const missing = max_number - length;

    if (missing) {
      toast.dismiss();
      toast.warn(`You need select ${max_number} numbers.`);
      toast.warn(`Missing ${missing} number${missing > 1 ? "s" : ""}.`);
      return;
    }

    if (cart.length) {
      const alreadyExists = cart.some(
        (item) =>
          item.game.id === id &&
          formatNumericArray(item.numbers) ===
            formatNumericArray(currentBet.selectedNumbers)
      );

      if (alreadyExists) {
        toast.dismiss();
        toast.warn("This game already exists in your cart.");
        return;
      }
    }

    toast.dismiss();
    addToCart({
      game: { id, color, price, name },
      numbers: currentBet.selectedNumbers,
    });
    clearGame();
    toast.success("Added successfully.");
  };

  const saveHandler = async () => {
    if (calculateTotal(cart) < games.min_cart_value) {
      toast.warn(
        `The value must be greater than ${formatPrice(games.min_cart_value)}`
      );
      return;
    }

    try {
      setIsFetching(true);
      const prevCart = await getRecentGamesCollection();
      const formattedGames = formatDateRecentGames(cart);

      if (prevCart) {
        await setRecentGamesCollection([...prevCart.games, ...formattedGames]);
      } else {
        await setRecentGamesCollection(formattedGames);
      }
      clearCart();
      toast.success("Cart has been saved.");
    } catch {
      toast.error("An error has occurred. Try it later.");
    } finally {
      setIsFetching(false);
    }
  };

  if (isLoading) {
    return (
      <PrivatedScreen
        navButtons={[
          { text: "Home", path: "/", isHeader: true },
          { text: "Account", path: "/account", isHeader: true },
        ]}
      >
        <S.Container isLoading>
          <Loading size={80} />
        </S.Container>
      </PrivatedScreen>
    );
  }

  return (
    <>
      {isCartModal && (
        <CartModal
          onClose={() => setIsCartModal(false)}
          color={currentBet.game.color}
          onSave={saveHandler}
          isFetching={isFetching}
        />
      )}
      <PrivatedScreen
        navButtons={[
          { text: "Home", path: "/", isHeader: true },
          { text: "Account", path: "/account", isHeader: true },
        ]}
      >
        <S.OpenCartButton onClick={() => setIsCartModal(true)}>
          <span>{numberToString(cart.length)}</span>
          <ShoppingCart size={35} />
        </S.OpenCartButton>

        <S.Container>
          <S.Content>
            <S.Title>
              NEW BET <span>FOR {currentBet.game.name}</span>
            </S.Title>

            <S.ChooseGameWrapper>
              <h3>Choose a game</h3>
              <div>
                {games.games.map((game) => (
                  <SelectGameButton
                    text={game.name}
                    color={game.color}
                    key={game.id}
                    isActive={currentBet.game.id === game.id}
                    onClick={() => changeGame(game)}
                  />
                ))}
              </div>

              <S.DescriptionWrapper>
                <h3>Fill your bet</h3>
                <p>{currentBet.game.description}</p>
              </S.DescriptionWrapper>
            </S.ChooseGameWrapper>

            <S.NumbersWrapper color={currentBet.game.color}>
              <S.ContainerNumbers>
                {numericArray.map((item) => (
                  <S.NumericButton
                    color={currentBet.game.color}
                    key={item}
                    isActive={currentBet.selectedNumbers.includes(item)}
                    onClick={() => onClickNumber(item)}
                  >
                    {item}
                  </S.NumericButton>
                ))}
              </S.ContainerNumbers>
            </S.NumbersWrapper>

            <S.ActionWrapper color={currentBet.game.color}>
              <span>
                <button type="button" onClick={completeGame}>
                  Complete game
                </button>
                <button type="button" onClick={clearGame}>
                  Clear game
                </button>
              </span>
              <button
                type="button"
                onClick={addToCartHandler}
                disabled={isFetching}
              >
                <ShoppingCart size={29} />
                Add to cart
              </button>
            </S.ActionWrapper>
          </S.Content>
          <Cart
            color={currentBet.game.color}
            onSave={saveHandler}
            isFetching={isFetching}
          />
        </S.Container>
      </PrivatedScreen>
    </>
  );
}

export function NewBet() {
  return (
    <NewBetContextProvider>
      <NewBetElement />
    </NewBetContextProvider>
  );
}
