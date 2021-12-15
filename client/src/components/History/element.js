import styled from "styled-components";

export const Background = styled.div`
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: ${({ hidden }) => (hidden ? "none" : "flex")};
    flex-direction: column;
    background: rgba(255, 255, 255, 0.9);
`;

export const MainPhoto = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GalleryPhoto = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto;
`;

export const Image = styled.img`
    height: 80%;
    width: auto;
    margin-left: 20px;

    &:hover {
        --webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition-duration: 0.5s;
        cursor: pointer;
    }
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
