import styled from "styled-components";

export const Background = styled.div`
    padding-top: 2vh;
    padding-bottom: 2vh;
`;

export const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: stretch;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ContentLeft = styled.div`
    width: 38.2%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const ContentRight = styled.div`
    width: 61.8%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 90%;
    height: auto;
    border-radius: 20px;
`;

export const Title = styled.div`
    width: 90%;
    margin: auto;
    line-height: 3rem;
    vertical-align: middle;
`;

export const Content = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 10px;
`;

export const Paragraph = styled.p`
    font-size: 24px;
`;

export const Ul = styled.ul``;

export const Li = styled.li``;
