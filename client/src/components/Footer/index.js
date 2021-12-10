import React from "react";

import { Background, Container, Title, Image, Website } from "./element";

import GithubIcon from "../Images/photos005.jpg";
import LoginIcon from "../Images/photos022.jpg";

const Footer = ({ setHiddenLogin }) => {
    const login = () => {
        setHiddenLogin(false);
    };

    return (
        <Background>
            <Container>
                <Title
                    href="https://github.com/hungdoba/blog"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image alt="github" src={GithubIcon} title="Github" />
                </Title>

                <Image
                    alt="login"
                    src={LoginIcon}
                    title="Login"
                    onClick={login}
                />

                <Website href="/#/blog">Hanshishisei.jp</Website>
            </Container>
        </Background>
    );
};

export default Footer;
