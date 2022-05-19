import React, { useState, useEffect } from 'react';
import './style.css';

import InfoSet from '../../InfoSet.json';

export default function Carousel(props) {
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        setDescriptions(InfoSet.descriptions[props.index]);
    }, [props.index]);
    return (
        <div className="carousel-container">
            <div className="carousel-title-container"><span className='carousel-title'>GALLERY</span></div>
            <img className="carousel-image" alt={descriptions} src={props.images[props.index]}/>
            <div className='bottom-carousel-container' >
                <div className={props.index > 0 ? 'arrow-container-left' : 'arrow-container-left-inactive'} onClick={props.prevImage}>
                    <svg className='test-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/>
                    </svg>
                </div>
                <div className={props.index === props.total - 1 ? 'arrow-container-right-inactive': 'arrow-container-right' } onClick={props.nextImage}>
                    <svg className='test-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/>
                    </svg>
                </div>
                <div className='gallery-count'>
                    <p className='gallery-count-text'>{props.index + 1}<strong>/{props.total}</strong></p>
                </div>
            </div>
        </div>
    );
}