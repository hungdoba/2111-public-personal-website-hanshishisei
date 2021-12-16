import React, { useState } from "react";

import ViewImage from "../ViewImage";

import { Background, Title, Container, Ul, Li, Img } from "./element";

import { food } from "../../data/food";
import { game } from "../../data/game";
import { utensil } from "../../data/utensil";
import { infrastructure } from "../../data/infrastructure";
import { history } from "../../data/history";

const Gallery = () => {
    const [visible, setVisible] = useState(false);
    const [Photos, setPhotos] = useState();
    const [selectedId, setSelectedId] = useState(0);

    const foodSelected = (e) => {
        setPhotos(food);
        setSelectedId(Number(e.target.alt));
        setVisible(true);
    };

    const gameSelected = (e) => {
        setPhotos(game);
        setSelectedId(Number(e.target.alt));
        setVisible(true);
    };

    const utensilSelected = (e) => {
        setPhotos(utensil);
        setSelectedId(Number(e.target.alt));
        setVisible(true);
    };

    const infrastructureSelected = (e) => {
        setPhotos(infrastructure);
        setSelectedId(Number(e.target.alt));
        setVisible(true);
    };

    const hideViewImage = () => {
        setVisible(false);
        setSelectedId(0);
    };

    return (
        <Background id="gallery">
            <Container>
                <Title>
                    <h1>ギャラリー</h1>
                </Title>
                <Title>
                    <h2>食</h2>
                </Title>
                <Ul>
                    {food &&
                        food.map((photo) => {
                            return (
                                <Li key={photo.key}>
                                    <Img
                                        alt={photo.alt}
                                        src={photo.src}
                                        onClick={foodSelected}
                                    />
                                </Li>
                            );
                        })}
                </Ul>
            </Container>
            <Container>
                <Title>
                    <h2>イベント・ゲーム</h2>
                </Title>
                <Ul>
                    {game &&
                        game.map((photo) => {
                            return (
                                <Li key={photo.key}>
                                    <Img
                                        alt={photo.alt}
                                        src={photo.src}
                                        onClick={gameSelected}
                                    />
                                </Li>
                            );
                        })}
                </Ul>
            </Container>
            <Container>
                <Title>
                    <h2>楽・学・覚(半学半教)</h2>
                </Title>
                <Ul>
                    {infrastructure &&
                        infrastructure.map((photo) => {
                            return (
                                <Li key={photo.key}>
                                    <Img
                                        alt={photo.alt}
                                        src={photo.src}
                                        onClick={infrastructureSelected}
                                    />
                                </Li>
                            );
                        })}
                </Ul>
            </Container>
            <Container>
                <Title>
                    <h2>施設</h2>
                </Title>
                <Ul>
                    {utensil &&
                        utensil.map((photo) => {
                            return (
                                <Li key={photo.key}>
                                    <Img
                                        alt={photo.alt}
                                        src={photo.src}
                                        onClick={utensilSelected}
                                    />
                                </Li>
                            );
                        })}
                </Ul>
            </Container>
            <Container>
                <Title>
                    <h2>履歴</h2>
                </Title>
                <Ul>
                    {history &&
                        history.map((photo) => {
                            return (
                                <Li key={photo.key}>
                                    <Img
                                        alt={photo.alt}
                                        src={photo.src}
                                        onClick={utensilSelected}
                                    />
                                </Li>
                            );
                        })}
                </Ul>
            </Container>
            <ViewImage
                visible={visible}
                hideViewImage={hideViewImage}
                selectedId={selectedId}
                Photos={Photos}
            />
        </Background>
    );
};

export default Gallery;
