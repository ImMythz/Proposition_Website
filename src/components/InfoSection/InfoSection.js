import React, {useState, useEffect} from 'react';
import './style.css';

export default function InfoSection(props) {
    const [infoTitle, setInfoTitle] = useState(['1st Date', '6 Month Anniversary', '1yr Anniversary']);
    const [info, setInfo] = useState(['May 22nd, 2019', 'November 22nd, 2019', 'May 22nd, 2020']);
    let titleIndex = 0;
    let textIndex = 0;
    return (
        <div className='info-container'>
            <div>
                <span className='info-aesthetic'>timeline.</span>
            </div>
            <div className='info-title-container'>
                <h1 className='info-title'>{infoTitle[titleIndex]}</h1>
            </div>
            <div className='info-text-container'>
                <div className='indent-line'></div>
                <p className='info-text'>{info[textIndex]}</p>
            </div>
        </div>
    );
}