import { auth, db } from "@services";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { ArrowRight } from "phosphor-react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import * as S from "./styles";

export const Home = () => {
  const gamesCollection = collection(db, "games");
  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("You`ve logged out.");
    } catch (e) {
      toast.success("An error has occurred.");
    }
  };

  useEffect(() => {
    const get = async () => {
      const data = await getDocs(gamesCollection);
      console.log(data.docs.map((doc) => ({ ...doc.data() })));
    };
    get();
  }, []);

  return (
    <S.Screen>
      <S.Header>
        <S.MiniLogo>
          TGL <span />
        </S.MiniLogo>
        <S.NavBar>
          <ul>
            <li>
              <button>Account</button>
            </li>
            <li>
              <button type="button" onClick={logOut}>
                Log out
                <ArrowRight weight="bold" size={25} />
              </button>
            </li>
          </ul>
        </S.NavBar>
      </S.Header>
    </S.Screen>
  );
};
