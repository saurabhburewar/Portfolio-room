import React, { useContext, useEffect, useState, useRef } from "react";
import "./nav.css";
import gsap from 'gsap';
import { Link } from "react-router-dom";
import threeimg from '../../static/nav/3d-01.png'
import aboutimg from '../../static/nav/about-01.png'
import expimg from '../../static/nav/exp-01.png'
import proimg from '../../static/nav/pro-01.png'
import skillimg from '../../static/nav/skill-01.png'
import contimg from '../../static/nav/cont-01.png'
import { PageContext } from "../../contexts/context";
import navBut from '../../static/nav/navOpen.svg';

export default function Nav() {

    const { currentPage, dispatchPage } = useContext(PageContext)
    const [open, setOpen] = useState(false);
    let tl = gsap.timeline();

    const nameLabel = useRef();
    const navLabel = useRef();

    useEffect(() => {
        if (open) {
            tl.add('navBig')
                .to(".nameLabel", {opacity: 1, duration: 0.2, delay: 0.5}, 'navBig')
                .to(".navLabel", {opacity: 1, duration: 0.2, delay: 0.5}, 'navBig')
        }
        else {
            tl.add('navSmall')
                .to(".nameLabel", {opacity: 0, duration: 0.1}, "navSmall")
                .to(".navLabel", {opacity: 0, duration: 0.1}, "navSmall")
                .to(".nameLabel", {opacity: 0, duration: 0.1, delay: 0.8}, "navSmall")
                .to(".navLabel", {opacity: 0, duration: 0.1, delay: 0.8}, "navSmall")
            
        }
    }, [open]);

    return (
        <div className={`navbar ${open ? "navbarOpen" : ''}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div onClick={() => {open ? setOpen(false) : setOpen(true)}} className="menuBut">
                <img src={navBut}></img>
            </div>
            <div className={`navPhoto ${open ? "navPhotoOpen" : ''}`}>
                <div className={`navImg ${open ? "navImgOpen" : ''}`}></div>
                <div ref={nameLabel} className="nameLabel">Saurabh Burewar</div>
            </div>
            <div className={`switchBox ${open ? "switchBoxOpen" : ''}`}>
                <div onClick={() => {setOpen(false); dispatchPage({type:"CHANGE", payload:"about"})}} className="switch">
                    <div className="navIcon">
                        <img src={aboutimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">About</div>
                </div>
                <div onClick={() => {setOpen(false); dispatchPage({type:"CHANGE", payload:"experience"})}} className="switch">
                    <div className="navIcon">
                        <img src={expimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">Experience</div>
                </div>
                <div onClick={() => {setOpen(false); dispatchPage({type:"CHANGE", payload:"projects"})}} className="switch">
                    <div className="navIcon">
                        <img src={[proimg]}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">Projects</div>
                </div>
                <div onClick={() => {setOpen(false); dispatchPage({type:"CHANGE", payload:"skills"})}} className="switch">
                    <div className="navIcon">
                        <img src={skillimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">Skills</div>
                </div>
                <div onClick={() => {setOpen(false); dispatchPage({type:"CHANGE", payload:"contact"})}} className="switch">
                    <div className="navIcon">
                        <img src={contimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">Contact</div>
                </div>
                <div className="switch threeMobile">
                    <div className="navIcon">
                        <img src={threeimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel"><p>3D Website</p> &nbsp; (Available on PC)</div>
                </div>
            </div>
            <Link to="/3d">
                <div className="threeswitch">
                    <div className="navIcon">
                        <img src={threeimg}></img>
                    </div>
                    <div ref={navLabel} className="navLabel">3D Website</div>
                </div>
            </Link>
        </div>
    );
}