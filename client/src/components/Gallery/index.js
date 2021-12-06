import React, { useEffect, useState } from "react";
import { Background, Title, Column, Container, Row, Image } from "./element";

import { Photos } from "../../data/Photos";

const Gallery = ({ showImage }) => {
    const [column1, setColumn1] = useState([]);
    const [column2, setColumn2] = useState([]);
    const [column3, setColumn3] = useState([]);
    const [column4, setColumn4] = useState([]);

    useEffect(() => {
        const photosLength = Photos.length;
        const columnLength = Math.ceil(photosLength / 4);
        let temp = Photos.slice(0, columnLength);
        setColumn1(temp);
        temp = Photos.slice(columnLength, 2 * columnLength);
        setColumn2(temp);
        temp = Photos.slice(2 * columnLength, 3 * columnLength);
        setColumn3(temp);
        temp = Photos.slice(3 * columnLength, 4 * columnLength);
        setColumn4(temp);
    }, []);

    return (
        <Background id="gallery">
            <Container>
                <Title>
                    <h1>ギャラリー</h1>
                </Title>
                <Row>
                    <Column>
                        {column1 &&
                            column1.map((photo) => {
                                return (
                                    <Image
                                        alt={photo.alt}
                                        key={photo.key}
                                        src={photo.image}
                                        onClick={showImage}
                                    />
                                );
                            })}
                    </Column>
                    <Column>
                        {column2 &&
                            column2.map((photo) => {
                                return (
                                    <Image
                                        alt={photo.alt}
                                        key={photo.key}
                                        src={photo.image}
                                        onClick={showImage}
                                    />
                                );
                            })}
                    </Column>
                    <Column>
                        {column3 &&
                            column3.map((photo) => {
                                return (
                                    <Image
                                        alt={photo.alt}
                                        key={photo.key}
                                        src={photo.image}
                                        onClick={showImage}
                                    />
                                );
                            })}
                    </Column>
                    <Column>
                        {column4 &&
                            column4.map((photo) => {
                                return (
                                    <Image
                                        alt={photo.alt}
                                        key={photo.key}
                                        src={photo.image}
                                        onClick={showImage}
                                    />
                                );
                            })}
                    </Column>
                </Row>
            </Container>
        </Background>
    );
};

export default Gallery;
