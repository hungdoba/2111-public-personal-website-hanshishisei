import AboutUs from "../components/AboutUs";
import Access from "../components/Access";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { useEffect, useState } from "react";
import ViewImage from "../components/ViewImage";
import SetStatus from "../components/SetStatus";

const Main = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [showViewImage, setShowViewImage] = useState(false);
    const [imageAlt, setImageAlt] = useState();
    const [hiddenLogin, setHiddenLogin] = useState(true);

    const hideImage = () => {
        setShowViewImage(false);
    };

    const showImage = (e) => {
        setImageAlt(e.target.alt);
        setShowViewImage(true);
    };

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

    return (
        <>
            <Hero />
            <AboutUs />
            <Gallery showImage={showImage} />
            <Price />
            <Access />
            <Footer setHiddenLogin={setHiddenLogin} />
            <ScrollButton visible={showScrollButton} onClick={scrollHome} />
            <ViewImage
                visible={showViewImage}
                imageAlt={imageAlt}
                hideImage={hideImage}
                setImageAlt={setImageAlt}
            />
            <SetStatus hidden={hiddenLogin} setHidden={setHiddenLogin} />
        </>
    );
};

export default Main;
