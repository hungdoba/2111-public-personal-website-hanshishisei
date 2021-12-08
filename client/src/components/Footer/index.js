import React from "react";

import { Background, Container, Title, Image, Website } from "./element";

import GithubIcon from "../Images/photos005.jpg";

const Footer = () => {
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

                <Website href="/#/blog">Hanshishisei.jp</Website>
            </Container>
        </Background>
    );
};

export default Footer;
