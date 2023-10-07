import './contact.css';
import React, { Component } from 'react';
import githubimg from '../../static/contact/github.svg';
import linkedinimg from '../../static/contact/linkedin.svg';
import mailimg from '../../static/contact/gmail.svg';
import instaimg from '../../static/contact/insta-01.svg'

export default function Contact() {
    return (
        <div className='contactPage'>
            <div className='contactBlock'>
                <a href='mailto:saurabh.skbr@gmail.com' target="_blank" className='contactItem'>
                    <div className='contactItemIcon'>
                        <img src={mailimg}></img>
                    </div>
                    <div className='contactItemLabel mLabel'><p>Email</p> &nbsp; here</div>
                </a>
                <a href='https://www.linkedin.com/in/saurabh-burewar-355131185/' target="_blank" className='contactItem'>
                    <div className='contactItemIcon'>
                        <img src={linkedinimg}></img>
                    </div>
                    <div className='contactItemLabel lnLabel'>Or connect on &nbsp; <p>LinkedIn</p></div>
                </a>
                <a href='https://github.com/saurabhburewar' target="_blank" className='contactItem'>
                    <div className='contactItemIcon'>
                        <img src={githubimg}></img>
                    </div>
                    <div className='contactItemLabel ghLabel'>Check out more of my projects on &nbsp; <p>Github</p></div>
                </a>
                <a href='https://www.instagram.com/qwerty_pencils/' target="_blank" className='contactItem'>
                    <div className='contactItemIcon'>
                        <img src={instaimg}></img>
                    </div>
                    <div className='contactItemLabel iLabel'>And more of my &nbsp; <p>hobbies</p> &nbsp; here!</div>
                </a>
            </div>
        </div>
    );
}