import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="main-content">
                <InfoSection />
                <Carousel />
            </div>
            <Footer />
        </>
    )
}