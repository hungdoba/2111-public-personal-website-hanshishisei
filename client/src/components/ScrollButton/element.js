import styled from "styled-components";

export const Button = styled.div`
    position: fixed;
    width: 32px;
    height: 32px;
    right: 4%;
    bottom: 15px;
    z-index: 1;
    cursor: pointer;
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`;
