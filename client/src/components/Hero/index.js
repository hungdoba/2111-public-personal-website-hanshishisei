import { useEffect, useState } from "react";
import axios from "axios";
import {
    Menu,
    Text,
    Title,
    Navbar,
    Content,
    MenuLink,
    MenuLinks,
    Container,
    Background,
    BottomMenu,
    BottomNavbar,
    NavbarBackground,
    ContentLeft,
    ContentRight,
    ContentCenter,
    TopPhoto,
    TopContent,
    Image,
    SmallText,
    MediumText,
} from "./element";

import photo0 from "../Images/photos004.jpg";
import photo023 from "../Images/photos023.jpg";
import photo024 from "../Images/photos024.jpg";

const Hero = () => {
    const [status, setStatus] = useState("status");

    useEffect(() => {
        const getStatus = async () => {
            const res = await axios.get("/status");
            setStatus(res.data);
        };
        getStatus();
    }, []);

    const openPhone = () => {
        window.open(
            "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
        );
    };

    return (
        <Background>
            <Container image={photo0}>
                <NavbarBackground>
                    <Navbar>
                        <Menu>
                            <MenuLink
                                to="aboutus"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                絆支至誠塾について
                            </MenuLink>
                        </Menu>
                        <Menu>
                            <MenuLink
                                to="gallery"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                ギャラリー
                            </MenuLink>
                        </Menu>
                        <Menu></Menu>
                        <Menu>
                            <MenuLink
                                to="price"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                メニュー
                            </MenuLink>
                        </Menu>
                        <Menu>
                            <MenuLink
                                to="access"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                アクセス
                            </MenuLink>
                        </Menu>
                    </Navbar>
                </NavbarBackground>
                <Content>
                    <ContentCenter>
                        <h2>{status}</h2>
                    </ContentCenter>
                    <ContentLeft>
                        <TopPhoto>
                            <Image alt="wife" src={photo024} />
                            <SmallText>タウリン</SmallText>
                        </TopPhoto>
                        <TopContent>
                            <MediumText>15億7.500万人との絆</MediumText>
                            <MediumText>タウリンのゆる～り</MediumText>
                            <MediumText>アウトトアープラス</MediumText>
                            <MediumText>
                                ～トンビ（キジ）と絆と仲間たち～
                            </MediumText>
                        </TopContent>
                    </ContentLeft>
                    <ContentRight>
                        <TopPhoto>
                            <Image alt="wife" src={photo023} />
                            <SmallText>エンちゃん</SmallText>
                        </TopPhoto>
                        <TopContent>
                            <Text>はんし・しせいじゅく</Text>
                            <Title>絆支・至誠塾</Title>
                            <Text> 夢の続き </Text>
                            <Text>
                                Activity Space The continuation of the dream{" "}
                            </Text>
                        </TopContent>
                    </ContentRight>
                </Content>
                <BottomNavbar>
                    <BottomMenu onClick={openPhone}>電話で連絡</BottomMenu>
                    <BottomMenu>メールで連絡</BottomMenu>
                    <BottomMenu backgroundColor="coral" color="white">
                        <MenuLinks
                            to="aboutus"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                            探索
                        </MenuLinks>
                    </BottomMenu>
                </BottomNavbar>
            </Container>
        </Background>
    );
};

export default Hero;
