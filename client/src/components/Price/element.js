import styled from "styled-components";

export const Background = styled.div`
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-image: linear-gradient(to right, lightblue, rgba(255, 0, 0, 0));
`;

export const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const ContentTitle = styled.h3`
    margin-top: 1em;
`;

export const ContentCenter = styled.div`
    width: 100%;
    padding-bottom: 1rem;
`;

export const ContentLeft = styled.div`
    width: 50%;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const ContentRight = styled.div`
    width: 50%;

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
    vertical-align: middle;
`;

export const Content = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 10px;
`;

export const Paragraph = styled.p`
    font-size: 24px;
`;

export const Ul = styled.ul`
    margin-left: 2rem;
`;

export const Li = styled.li`
    list-style-type: disc;
    margin-top: 0.5em;
`;

export const LiNone = styled.li`
    list-style-type: none;
`;
