import './about.css';
import aboutdata from '../../static/about/about.json';
import React, { Component } from 'react';

export default function About() {

    const data = aboutdata

    return (
        <div className='aboutPage'>
            <div className='aboutTitle'>Saurabh Burewar</div>
            <div className='aboutdes'>{data.info}</div>
        </div>
    );
}