import { CardInput, FormButton } from "..";
import { MdEmail } from "react-icons/md";
import { IMyAccountReturn } from "@interfaces/index";
import { FormEvent, useState } from "react";
import { authServices, userServices } from "@services/index";
import { toast } from "react-toastify";

import * as S from "./styles";

type Props = {
  isEditable: boolean;
  data: IMyAccountReturn;
  onClickEdit: (
    name: "Name" | "Email" | "Password",
    resetStates: () => void
  ) => void;
};

export const ChangeEmailCard = (props: Props) => {
  const [inputs, setInputs] = useState({
    email: props.data.email,
    password: "",
  });
  const { login } = authServices();
  const { updateMyUser } = userServices();

  const resetStates = () => {
    setInputs({ email: props.data.email, password: "" });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = inputs;

    try {
      await login({ email: props.data.email, password: password });
      await updateMyUser({ email: email, name: props.data.name });

      toast.success("The email has been updated!!");
      window.location.reload();
    } catch (err: any) {
      if (err.status === 401) return toast.error("The password is invalid.");
      toast.error(err.data.message);
    }
  };

  return (
    <S.Container>
      <S.Head>
        <h2>
          <span>
            <MdEmail size={22} />
          </span>
          Email
        </h2>
      </S.Head>
      {props.isEditable && (
        <form onSubmit={onSubmitHandler}>
          <CardInput
            required
            placeholder="Email"
            type="email"
            value={inputs.email}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <CardInput
            placeholder="Please enter your password"
            required
            type="password"
            value={inputs.password}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <FormButton isLoading={false} text="Save changes" type="submit" />
        </form>
      )}
      {!props.isEditable && (
        <FormButton
          isLoading={false}
          text="Edit"
          onClick={() => props.onClickEdit("Email", resetStates)}
        />
      )}
    </S.Container>
  );
};
