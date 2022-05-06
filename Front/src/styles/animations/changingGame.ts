import { keyframes } from "styled-components";

export const oldGame = keyframes`
    from{
        transform: translateY(25px);
        color: white;

    }
    to {
        transform: translateY(0px);

    }
`;

export const newGame = keyframes`
    from{
        transform: translateY(0px);
        
    }
    to {
        color: white;
        transform: translateY(-25px);

    }
`;
