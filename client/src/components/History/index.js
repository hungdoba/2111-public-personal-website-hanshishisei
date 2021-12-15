import React, { useState } from "react";
import {
    Background,
    GalleryPhoto,
    MainPhoto,
    Image,
    CloseButton,
    CloseSymbol,
} from "./element";

import { Histories } from "../../data/Histories";

const History = ({ hidden }) => {
    const [selectedPhoto, setSelectedPhoto] = useState();
    const selectPhoto = (e) => {
        setSelectedPhoto(e.target);
        console.log(e.target);
    };
    const hideImage = () => {};
    return (
        <Background hidden={hidden}>
            <MainPhoto>
                {selectedPhoto && (
                    <Image
                        src={selectedPhoto.src}
                        alt={selectedPhoto.alt}
                        key={selectedPhoto.key}
                    />
                )}
            </MainPhoto>
            <GalleryPhoto>
                {Histories &&
                    Histories.map((photo) => {
                        return (
                            <Image
                                onClick={selectPhoto}
                                src={photo.image}
                                alt={photo.alt}
                                key={photo.key}
                            />
                        );
                    })}
            </GalleryPhoto>
            <CloseButton>
                <CloseSymbol onClick={hideImage}>&#10006;</CloseSymbol>
            </CloseButton>
        </Background>
    );
};

export default History;
