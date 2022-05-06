import * as S from "./styles";
import { CardInput, FormButton } from "..";
import { ImKey } from "react-icons/im";
import { IMyAccountReturn } from "@interfaces/index";
import { FormEvent, useState } from "react";
import { authServices } from "@services/index";
import { toast } from "react-toastify";

type Props = {
  isEditable: boolean;
  data: IMyAccountReturn;
  onClickEdit: (
    name: "Name" | "Email" | "Password",
    resetStates: () => void
  ) => void;
};

export const ChangePasswordCard = (props: Props) => {
  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
    currentPassword: "",
  });
  const { login, resetPassword, changePassword } = authServices();

  const resetStates = () => {
    setInput({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { confirmPassword, currentPassword, newPassword } = input;
    const { email } = props.data;

    if (newPassword !== confirmPassword) {
      toast("The confirmation password is wrong.");
      return;
    }

    if (newPassword === currentPassword) {
      toast.error("The new password is the same of current password.");
      return;
    }

    try {
      await login({ email: email, password: currentPassword });
      const { token } = await resetPassword({ email: email });
      await changePassword({ body: { password: newPassword }, token: token });

      toast.success("The password has been updated!!");
      window.location.reload();
    } catch (err: any) {
      if (err.status === 401)
        return toast.error("The current password is invalid.");

      toast.error(err.data.message);
    }
  };

  return (
    <S.Container>
      <S.Head>
        <h2>
          <span>
            <ImKey size={19} />
          </span>
          Password
        </h2>
      </S.Head>
      {props.isEditable && (
        <form onSubmit={onSubmitHandler}>
          <CardInput
            placeholder="Current"
            required
            type="password"
            value={input.currentPassword}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, currentPassword: e.target.value }))
            }
          />
          <CardInput
            placeholder="New"
            required
            type="password"
            value={input.newPassword}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, newPassword: e.target.value }))
            }
          />
          <CardInput
            placeholder="Re-type new"
            required
            type="password"
            value={input.confirmPassword}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
          />
          <FormButton isLoading={false} text="Save changes" type="submit" />
        </form>
      )}
      {!props.isEditable && (
        <FormButton
          isLoading={false}
          text="Edit"
          onClick={() => props.onClickEdit("Password", resetStates)}
        />
      )}
    </S.Container>
  );
};
