import AboutUs from "../components/AboutUs";
import Access from "../components/Access";
import Hero from "../components/Hero";
import Price from "../components/Price";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import { useEffect, useState } from "react";
import SetStatus from "../components/SetStatus";
import History from "../components/History";

const Main = () => {
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

    return (
        <>
            <Hero />
            <AboutUs />
            <Price />
            <Access />
            <Footer setHiddenLogin={setHiddenLogin} />
            <ScrollButton visible={showScrollButton} onClick={scrollHome} />
            <SetStatus hidden={hiddenLogin} setHidden={setHiddenLogin} />
            <History hidden />
        </>
    );
};

export default Main;
