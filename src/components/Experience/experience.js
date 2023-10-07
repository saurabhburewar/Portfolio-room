import './experience.css';
import React, { Component, useEffect, useState } from 'react';
import expData from '../../static/exp/exp.json';

export default function Experience() {

    const [comp, setComp] = useState("");
    const [hover, setHover] = useState("#090811");
    const data = expData

    const RenderDetails = () => {
        if (comp !== "") {
            return (
                <div dangerouslySetInnerHTML={{__html: comp}}></div>
            )
        }
        return (
            <div style={{fontStyle: 'italic', opacity: 0.4}}>Hover over a card for more information </div>
        );
    }

    return (
        <div className='expPage'>
            <div className='expDetails'>
                <div className='expDesc'>
                    <RenderDetails />
                </div>
            </div>
            {/* <div className='expLine'></div> */}
            <div className='expTimeline'>
            {data.map(dataObj => (
                <div className='expPost'>
                    <div onMouseEnter={() => {setComp(dataObj.details);setHover(dataObj.color)}} onMouseLeave={() => {setComp("");setHover("#090811")}} className={`expPostBox ${dataObj.left ? "expBoxLeft" : "expBoxRight"}`} id={dataObj.id}>
                        <div className={`expPostHead ${dataObj.left ? "expTextLeft" : "expTextRight"}`}>{dataObj.Title}</div>
                        <div className={`expPostPost ${dataObj.left ? "expTextLeft" : "expTextRight"}`}>{dataObj.Post}</div>
                        <div className={`expPostDesc ${dataObj.left ? "expTextLeft" : "expTextRight"}`}>{dataObj.Description}</div>
                    </div>
                    <div className='expLine'></div>
                    <div className='expPostBubble'>
                        <img src={dataObj.Pic}></img>
                    </div>
                    <div className={`expPostDate ${dataObj.left ? "expDateLeft" : "expDateRight"}`}>{dataObj.Date}</div>
                </div>
            ))}
            </div>
        </div>
    );
}