import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";

import InfoSet from "../InfoSet.json";

// import test from "../images/1st_Date.JPG";
// import test2 from "../images/6-month-Legacy West.jpg";
// import test3 from "../images/1-yr-Bluebonnets.jpg";
// import test4 from "../images/NA-Background.png";

export default function Home(props) {
    const [count, setCount] = useState(0);
    const [images, setImages] = useState(InfoSet.images);

    useEffect(() => {
        console.log(images);
    }, []);

    let total = images.length;

    const nextImage = () => {
        if (count <= total - 2) {
            setCount(count + 1);
            console.log(count);
        } 
    }

    const prevImage = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log(count);
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