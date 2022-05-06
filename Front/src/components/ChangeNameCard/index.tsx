import * as S from "./styles";
import { FaUserAlt } from "react-icons/fa";
import { CardInput, FormButton } from "..";
import { IMyAccountReturn } from "@interfaces/index";
import { FormEvent, useState } from "react";
import { authServices, userServices } from "@services/index";
import { toast } from "react-toastify";

type Props = {
  isEditable: boolean;
  data: IMyAccountReturn;
  onClickEdit: (
    name: "Name" | "Email" | "Password",
    resetStates: () => void
  ) => void;
};

export const ChangeNameCard = (props: Props) => {
  const [inputs, setInputs] = useState({ name: props.data.name, password: "" });
  const { updateMyUser } = userServices();
  const { login } = authServices();

  const resetStates = () => {
    setInputs({ name: props.data.name, password: "" });
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { email } = props.data;
    const { name, password } = inputs;

    if (name.length < 6) {
      toast.error("The name must have more than 6 characters.");
      return;
    } else if (!name.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)) {
      toast.error("The name must have only letters and spaces.");
      return;
    }

    try {
      await login({ email: email, password: password });
      await updateMyUser({ email: email, name: name });

      toast.success("The name has been updated!!");
      window.location.reload();
    } catch (err: any) {
      if (err.status === 401) return toast.error("The password is invalid.");

      toast.error(err.message);
    }
  };

  return (
    <S.Container>
      <S.Head>
        <h2>
          <span>
            <FaUserAlt size={20} />
          </span>
          Name
        </h2>
      </S.Head>
      {props.isEditable && (
        <form onSubmit={onSubmitHandler}>
          <CardInput
            placeholder="Name"
            required
            type="text"
            value={inputs.name}
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, name: e.target.value }))
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
          onClick={() => props.onClickEdit("Name", resetStates)}
        />
      )}
    </S.Container>
  );
};
