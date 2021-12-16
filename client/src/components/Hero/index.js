import axios from "axios";
import { useEffect, useState } from "react";

import {
    Menu,
    Text,
    Title,
    Navbar,
    Content,
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
    MenuRoute,
} from "./element";

import photo0 from "../Images/system/photos004.jpg";
import photo023 from "../Images/system/photos023.jpg";
import photo024 from "../Images/system/photos024.jpg";

const Hero = () => {
    const [status, setStatus] = useState("status");

    useEffect(() => {
        const getStatus = async () => {
            const res = await axios.get("/status");
            setStatus(res.data);
        };
        getStatus();
    }, []);

    const gotoPrice = () => {
        var element = document.getElementById("price");
        if (element !== null) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const gotoAccess = () => {
        var element = document.getElementById("access");
        if (element !== null) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Background>
            <Container image={photo0}>
                <NavbarBackground>
                    <Navbar>
                        <Menu>
                            <MenuRoute to="/">絆支至誠塾について</MenuRoute>
                        </Menu>
                        <Menu>
                            <MenuRoute to="/gallery" exact="true">
                                ギャラリー
                            </MenuRoute>
                        </Menu>
                        <Menu>
                            <MenuRoute to="/" onClick={gotoPrice}>
                                メニュー
                            </MenuRoute>
                        </Menu>
                        <Menu>
                            <MenuRoute to="/" onClick={gotoAccess}>
                                アクセス
                            </MenuRoute>
                        </Menu>
                    </Navbar>
                </NavbarBackground>
                <Content>
                    <ContentCenter>
                        <h2>{status}</h2>
                    </ContentCenter>
                    <ContentLeft>
                        <TopPhoto>
                            <Image alt="chiba" src={photo024} />
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
                    <BottomMenu>電話で連絡</BottomMenu>
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
