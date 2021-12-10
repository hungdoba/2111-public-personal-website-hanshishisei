import styled from "styled-components";

export const Background = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.99);

    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    margin-top: auto;
    margin-bottom: auto;
    overflow: hidden;
    border-radius: 1vw;
    background: rgba(255, 255, 255, 1);

    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    justify-content: center;
    align-items: center;
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 5vw;
    height: 5vh;
`;

export const CloseSymbol = styled.div`
    font-size: 1.3rem;
    color: blue;
    &:hover {
        cursor: pointer;
        color: darkblue;
        transform: scale(2);
    }
`;

export const Form = styled.form`
    padding: 5px;
    background-color: lightblue;
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
    color: red;
`;

export const Input = styled.input`
    margin-left: 10px;
`;

export const InputSubmit = styled.input`
    padding-right: 10px;
    padding-left: 10px;
`;

export const InputButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const Error = styled.h2`
    color: red;
`;
