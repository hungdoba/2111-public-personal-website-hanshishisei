import styled from "styled-components";
import forestLargeBlur from "../Images/photos001.jpg";
import whiteBackground from "../Images/photos002.jpg";
import whiteBackgrounds from "../Images/photos003.jpg";
import { Link } from "react-scroll";

export const Background = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${forestLargeBlur});
`;

export const NavPhotoBackground = styled.div`
    width: 10vh;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Arrow = styled.div`
    color: lightgrey;
    font-size: 30px;
    &:hover {
        color: white;
        font-size: 40px;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    width: 80vw;
    height: 80vh;
    margin-top: auto;
    margin-bottom: auto;
    padding-bottom: 5vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden;
    border-radius: 1vw;
    background-size: cover;
    background-image: url(${(props) => props.image});

    @media screen and (max-width: 767px) {
        width: 90vw;
        height: 95vh;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    position: relative;
`;

export const NavbarBackground = styled.div`
    width: 100%;
    height: 30%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${whiteBackground});

    @media screen and (max-width: 676px) {
        background-image: url(${whiteBackgrounds});
    }
`;

export const Navbar = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    @media screen and (max-width: 676px) {
        height: 20vh;
    }
`;

export const Menu = styled.div`
    width: 15%;
    height: 50%;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 676px) {
        width: 10vw;
        height: 90%;
        color: white;
    }
`;

export const MenuLink = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: orange;
    }

    @media screen and (max-width: 767px) {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
`;

export const MenuLinks = styled(Link)`
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: orange;
    }
`;

export const Content = styled.div`
    width: 80%;
    height: 65%;
    color: white;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 767px) {
        width: 90%;
    }
`;

export const ContentLeft = styled.div`
    width: 45%;
    max-height: 55%;
    color: white;
    margin-right: 5%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 1em;
    border: 1px solid white;
    background: rgba(0, 204, 255, 0.5);

    @media screen and (max-width: 767px) {
        width: 100%;
        max-height: 40%;
        border-radius: 1em;
    }
`;

export const TopPhoto = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 1em;
    overflow: hidden;
`;

export const TopContent = styled.div`
    width: 70%;
    height: 100%;
`;

export const ContentRight = styled.div`
    width: 45%;
    max-height: 55%;
    color: white;
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border-radius: 1em;
    border: 1px solid white;
    background: rgba(0, 204, 255, 0.5);

    @media screen and (max-width: 767px) {
        width: 100%;
        max-height: 40%;
        border-radius: 1em;
    }
`;

export const ContentCenter = styled.div`
    width: 100%;
    color: white;
    text-align: right;
    margin-bottom: 2em;

    @media screen and (max-width: 767px) {
        text-align: center;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: bold;
    margin: 10px;

    @media screen and (max-width: 767px) {
        font-size: 24px;
    }
`;

export const Text = styled.div`
    font-size: 24px;
    margin: 10px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const MediumText = styled.div`
    font-size: 20px;
    margin: 10px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const SmallText = styled.div`
    font-size: 18px;
    margin-left: 30px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
        margin-left: 10px;
    }
`;

export const BottomNavbar = styled.div`
    width: 70%;
    height: 5vh;
    border-radius: 20px;
    display: none;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    @media screen and (max-width: 676px) {
        width: 90%;
    }
`;

export const BottomMenu = styled.div`
    width: 33%;
    height: 5vh;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    line-height: 5vh;

    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "white"};
    color: ${({ color }) => color || "blue"};

    @media screen and (max-width: 676px) {
        font-size: 12px;
    }
`;

export const ChildContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
`;

export const Image = styled.img`
    height: 80%;
    width: auto;
    margin: 1em 1em 0 1em;
    border-radius: 1em;

    @media screen and (max-width: 676px) {
        width: 100%;
        height: auto;
        border-radius: 1em;
        margin: 0.3em 0.3em 0 0.3em;
    }
`;
