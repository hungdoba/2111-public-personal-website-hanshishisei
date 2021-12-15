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

const ViewImage = ({ visible, hideViewImage, selectedId, Photos }) => {
    const [photosLength, setPhotosLength] = useState(0);
    const [index, setIndex] = useState(0);
    const [photo, setPhoto] = useState();

    useEffect(() => {
        if (Photos !== undefined) {
            setPhotosLength(Photos.length);
        }
    }, [Photos]);

    useEffect(() => {
        if (selectedId !== 0) {
            setIndex(selectedId - 1);
        }
    }, [selectedId]);

    useEffect(() => {
        if (visible === true) {
            setPhoto(Photos[index]);
        }
    }, [visible, Photos, index]);

    const nextImage = () => {
        if (index === photosLength - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const previousImage = () => {
        if (index === 0) {
            setIndex(photosLength - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <Background visible={visible}>
            <Nav>
                <NavSymbol onClick={previousImage}>&#8249;</NavSymbol>
            </Nav>
            {photo && (
                <Container>
                    <Image alt={photo.alt} src={photo.src} />
                </Container>
            )}
            <Nav>
                <NavSymbol onClick={nextImage}>&#8250;</NavSymbol>
            </Nav>
            <CloseButton>
                <CloseSymbol onClick={hideViewImage}>&#10006;</CloseSymbol>
            </CloseButton>
        </Background>
    );
};

export default ViewImage;
