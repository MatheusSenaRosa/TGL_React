import { keyframes } from "styled-components";

export const addedElement = keyframes`
    0%{
        transform: translateX(-150px);
        opacity: 0;
    }

    80%{
        transform: translateX(20px);
    }

    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

export const notRemovedElement = keyframes`
    to {
        transform: translateY(-110px);
    }
`;

export const addCart = keyframes`
    from{
        transform: translateY(-110px);

    }
    to {
        transform: translateY(0px);

    }
`;

export const removeCart = keyframes`
    to{
        transform: translateX(-200px);
        opacity: 0;
    }
`;
