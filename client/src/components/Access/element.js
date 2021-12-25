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
    justify-content: stretch;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ContentCenter = styled.div`
    width: 100%;
    margin-bottom: 5vh;
`;

export const ContentLeft = styled.div`
    width: 38.2%;
    margin-bottom: 5vh;

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
    width: 100%;
    height: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 10px;
`;

export const ImageSmall = styled.img`
    width: 50%;
    height: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
`;

export const Title = styled.div`
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    vertical-align: middle;
`;

export const Content = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 10px;
`;

export const Paragraph = styled.p`
    margin-top: 1em;
`;

export const ParagraphContent = styled.p`
    margin-left: 1em;
`;

export const Map = styled.div`
    width: 98%;
    height: 60vh;
    margin: 1%;
    overflow: hidden;
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 97%;
`;
