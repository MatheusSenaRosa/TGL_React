import { ArrowRight, Trash } from "phosphor-react";

import * as S from "./styles";

type Props = {
  color: string;
};

export const Cart = ({ color }: Props) => {
  return (
    <S.Container>
      <S.Title>CART</S.Title>
      <S.List color={color}>
        <S.Item>
          <button>
            <Trash size={30} />
          </button>
          <span />
          <div>
            <p>01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25</p>
            <h4>
              Lotofacil <span>R$ 2,50</span>
            </h4>
          </div>
        </S.Item>
        <S.Item>
          <button>
            <Trash size={30} />
          </button>
          <span />
          <div>
            <p>01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25</p>
            <h4>
              Lotofacil <span>R$ 2,50</span>
            </h4>
          </div>
        </S.Item>
        <S.Item>
          <button>
            <Trash size={30} />
          </button>
          <span />
          <div>
            <p>01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25</p>
            <h4>
              Lotofacil <span>R$ 2,50</span>
            </h4>
          </div>
        </S.Item>
      </S.List>
      <S.TotalWrapper>
        CART <span>TOTAL: R$ 7,00</span>
      </S.TotalWrapper>
      <S.SubmitButton color={color}>
        Save
        <ArrowRight weight="bold" />
      </S.SubmitButton>
    </S.Container>
  );
};
