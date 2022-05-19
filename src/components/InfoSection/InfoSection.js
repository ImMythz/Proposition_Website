import React, { useState, useEffect } from 'react';
import './style.css';

import InfoSet from '../../InfoSet.json';

export default function InfoSection(props) {
    const [infoTitle, setInfoTitle] = useState([]);
    const [info, setInfo] = useState([]);
    const [place, setPlace] = useState([]);

    useEffect(() => {
        setInfoTitle(InfoSet.titles[props.index]);
        setInfo(InfoSet.info[props.index]);
        setPlace(InfoSet.places[props.index]);
    }, [props.index]);
    
    return (
        <div className='info-container'>
            <p className='info-aesthetic'>timeline.</p>
            <div className='info-title-container'>
                <h1 className='info-title'>{infoTitle}</h1>
            </div>
            <div className='info-text-section'>
                <div className='indent-line-container'>
                    <div className='indent-line'></div>
                </div>
                <div className='info-text-container'>
                    <p className='info-text'>{place}</p>
                    <p className='info-text'>{info}</p>
                </div>
            </div>
        </div>
    );
}