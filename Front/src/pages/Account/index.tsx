import { LogOutButton } from "@components/LogOutButton";
import { MiniLogo } from "@components/MiniLogo";
import { Link } from "react-router-dom";
import * as S from "./styles";

import { useEffect, useState } from "react";
import { userServices } from "@services/index";
import { Loader } from "@components/Loader";
import { IMyAccountReturn } from "@interfaces/index";
import { ChangeNameCard } from "@components/ChangeNameCard";
import { ChangeEmailCard } from "@components/ChangeEmailCard";
import { ChangePasswordCard } from "@components/ChangePasswordCard";

export const Account = () => {
  const [editableCard, setEditableCard] = useState("");
  const [userData, setUserData] = useState<IMyAccountReturn>();

  const { myAccount } = userServices();

  useEffect(() => {
    const getData = async () => {
      const response = await myAccount();

      setUserData(response);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickEditHandler = (
    name: "Name" | "Email" | "Password",
    resetStates: () => void
  ) => {
    setEditableCard(name);
    resetStates();
  };

  return (
    <>
      <S.Header>
        <div>
          <MiniLogo />
          <Link to="/home">Home</Link>
        </div>
        <S.NavigationMenu>
          <ul>
            <li>
              <LogOutButton />
            </li>
          </ul>
        </S.NavigationMenu>
      </S.Header>
      <S.Content>
        <h1>General Account Settings</h1>
        {!userData && (
          <S.LoaderContainer>
            <Loader />
          </S.LoaderContainer>
        )}
        {userData && (
          <S.Container>
            <section>
              <ChangeNameCard
                data={userData}
                onClickEdit={onClickEditHandler}
                isEditable={editableCard === "Name"}
              />
            </section>

            <section>
              <ChangeEmailCard
                data={userData}
                onClickEdit={onClickEditHandler}
                isEditable={editableCard === "Email"}
              />
            </section>

            <section>
              <ChangePasswordCard
                data={userData}
                onClickEdit={onClickEditHandler}
                isEditable={editableCard === "Password"}
              />
            </section>
          </S.Container>
        )}
      </S.Content>
    </>
  );
};
