import * as S from "./styles";

type Props = {
  onClose: () => void;
};

export const SideBar = ({ onClose }: Props) => {
  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.Aside></S.Aside>
    </>
  );
};
