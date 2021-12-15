import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import SetStatus from "../components/SetStatus";
import ScrollButton from "../components/ScrollButton";

const GalleryPage = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [hiddenLogin, setHiddenLogin] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    });

    const scrollHandler = () => {
        if (window.scrollY > 30) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        document
            .getElementById("gallery")
            .scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <>
            <Hero />
            <Gallery />
            <Footer setHiddenLogin={setHiddenLogin} />
            <ScrollButton visible={showScrollButton} onClick={scrollHome} />
            <SetStatus hidden={hiddenLogin} setHidden={setHiddenLogin} />
        </>
    );
};

export default GalleryPage;
