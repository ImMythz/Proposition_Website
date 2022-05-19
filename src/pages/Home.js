import React, { useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";

import InfoSet from "../InfoSet.json";

export default function Home(props) {
    const [count, setCount] = useState(0);
    const [images, setImages] = useState(InfoSet.images);

    let total = images.length;

    const nextImage = () => {
        if (count <= total - 2) {
            setCount(count + 1);
        } 
    }

    const prevImage = () => {
        if (count > 0) {
            setCount(count - 1);
        } 
    }
    return (
        <>
            <NavBar />
            <div className="main-content-container">
                <div className="main-content">
                    <InfoSection index={count} total={total}/>
                    <Carousel images={images} index={count} nextImage={nextImage} prevImage={prevImage} total={total}/>
                </div>
            </div>
            <Footer />
        </>
    )
}