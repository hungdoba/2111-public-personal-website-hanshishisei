import styled from "styled-components";

export const Button = styled.div`
    position: fixed;
    right: 4%;
    bottom: 15px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: blue;
    transform: rotate(-90deg);
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    &:hover {
        font-size: 3.5rem;
        color: darkblue;
    }

    @media screen and (max-width: 767px) {
        bottom: 5px;
    }
`;
