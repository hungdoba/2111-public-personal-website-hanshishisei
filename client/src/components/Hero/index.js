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
} from "./element";

import photo0 from "../Images/photo01.jpg";

const Hero = () => {
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
                    <Text>はんし・しせいじゅく</Text>
                    <Title>絆支・至誠塾</Title>
                    <Text> 夢の続き </Text>
                    <Text> Activity Space The continuation of the dream </Text>
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
