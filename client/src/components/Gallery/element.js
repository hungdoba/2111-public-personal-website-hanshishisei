import styled from "styled-components";

export const Background = styled.div`
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0), lightblue);
`;

export const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Title = styled.div`
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    vertical-align: middle;
`;

export const Row = styled.div`
    display: --ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 4px;
`;

export const Column = styled.div`
    --ms-flex: 25%;
    flex: 24%;
    max-width: 25%;
    padding: 0 0.5%;

    @media (max-width: 800px) {
        -ms-flex: 50%;
        flex: 49%;
        max-width: 50%;
        padding: 0 0.5%;
    }

    @media (max-width: 600px) {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const Li = styled.li`
    height: 40vh;
    flex-grow: 1;
`;

export const ImgCover = styled.div``;

export const Img = styled.img`
    max-height: 95%;
    max-width: 95%;
    object-fit: cover;
    vertical-align: bottom;

    &:hover {
        --webkit-transform: scale(1.5);
        transform: scale(1.5);
        transition-duration: 1s;
        cursor: pointer;
    }
`;
