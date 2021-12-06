import { useState, useEffect } from "react";

import {
    Background,
    CloseButton,
    CloseSymbol,
    Container,
    Image,
    Nav,
    NavSymbol,
} from "./element";

import { Photos } from "../../data/Photos";

const ViewImage = ({ visible, hideImage, imageAlt }) => {
    const photosLength = Photos.length;

    const [index, setIndex] = useState(0);
    const [photo, setPhoto] = useState(Photos[0]);

    const nextImage = () => {
        if (index >= photosLength - 49) {
            setIndex(50);
        } else {
            setIndex(index + 1);
        }
    };

    const previousImage = () => {
        if (index <= 50) {
            setIndex(photosLength - 49);
        } else {
            setIndex(index - 1);
        }
    };

    useEffect(() => {
        if (isNaN(index) === false) {
            setPhoto(Photos[index]);
        }
    }, [index]);

    useEffect(() => {
        var temp = parseInt(imageAlt);
        setIndex(temp - 1);
    }, [imageAlt]);

    return (
        <Background visible={visible}>
            <Nav>
                <NavSymbol onClick={previousImage}>&#8249;</NavSymbol>
            </Nav>
            <Container>
                <Image alt={photo.alt} src={photo.image} />
            </Container>
            <Nav>
                <NavSymbol onClick={nextImage}>&#8250;</NavSymbol>
            </Nav>
            <CloseButton>
                <CloseSymbol onClick={hideImage}>&#10006;</CloseSymbol>
            </CloseButton>
        </Background>
    );
};

export default ViewImage;
