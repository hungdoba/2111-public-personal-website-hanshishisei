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
    flex-wrap: wrap;

    @media screen and (max-width: 767px) {
        width: 95%;
    }
`;

export const ContentLeft = styled.div`
    width: 75%;
    height: 100%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const ContentRight = styled.div`
    width: 25%;
    height: 100%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const ContentCenter = styled.div`
    width: 100%;
    height: 100%;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
`;

export const Title = styled.div`
    width: 100%;
    min-height: 10vh;
    line-height: 10vh;
    font-weight: bold;
    vertical-align: middle;

    @media screen and (max-width: 767px) {
        line-height: 1.5em;
    }
`;

export const Content = styled.div`
    width: 90%;
    margin: auto;
`;

export const Paragraph = styled.p`
    text-indent: 1em;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;
