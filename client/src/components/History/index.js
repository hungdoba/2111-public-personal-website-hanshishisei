import React, { useState } from "react";
import {
    Background,
    GallaryPhoto,
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
                        id={selectedPhoto.id}
                    />
                )}
            </MainPhoto>
            <GallaryPhoto>
                {Histories &&
                    Histories.map((photo) => {
                        return (
                            <Image
                                onClick={selectPhoto}
                                src={photo.image}
                                alt={photo.alt}
                                id={photo.id}
                            />
                        );
                    })}
            </GallaryPhoto>
            <CloseButton>
                <CloseSymbol onClick={hideImage}>&#10006;</CloseSymbol>
            </CloseButton>
        </Background>
    );
};

export default History;
