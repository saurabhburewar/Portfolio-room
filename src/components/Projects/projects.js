import './projects.css';
import React, { Component, useEffect, useRef, useState } from 'react';
import Fav from './fav';
import Web from './web';
import Ml from './ml';
import Others from './others';


export default function Projects() {

    const [projectPage, setProjectPage] = useState("fav")
    const favButton = useRef()
    const mlButton = useRef()
    const webButton = useRef()
    const othButton = useRef()

    useEffect(() => {
        if (projectPage === "fav") {
            favButton.current.classList.add("catActive")
            mlButton.current.classList.remove("catActive")
            webButton.current.classList.remove("catActive")
            othButton.current.classList.remove("catActive")
        } else if (projectPage === "ml") {
            favButton.current.classList.remove("catActive")
            mlButton.current.classList.add("catActive")
            webButton.current.classList.remove("catActive")
            othButton.current.classList.remove("catActive")
        } else if (projectPage === "web") {
            favButton.current.classList.remove("catActive")
            mlButton.current.classList.remove("catActive")
            webButton.current.classList.add("catActive")
            othButton.current.classList.remove("catActive")
        } else if (projectPage === "oth") {
            favButton.current.classList.remove("catActive")
            mlButton.current.classList.remove("catActive")
            webButton.current.classList.remove("catActive")
            othButton.current.classList.add("catActive")
        }
    })

    const ProjectView = () => {
        if (projectPage === "fav") {
            return <Fav />
        } else if (projectPage === "ml") {
            return <Ml />
        } else if (projectPage === "web") {
            return <Web />
        } else if (projectPage === "oth") {
            return <Others />
        }
    }

    return (
        <div className='projectsPage'>
            <div className='projectCategory'>
                <div className='projectCategory1'>
                    <div ref={favButton} onClick={() => setProjectPage("fav")} className='projectCategorynav'>Favourites</div>
                    <div ref={mlButton} onClick={() => setProjectPage("ml")} className='projectCategorynav'>ML & Big Data</div>
                    <div ref={webButton}onClick={() => setProjectPage("web")} className='projectCategorynav'>Web Dev</div>
                    <div ref={othButton} onClick={() => setProjectPage("oth")} className='projectCategorynav'>Others</div>
                </div>
            </div>
            <div className='projectPages'>
                <div className='projectPages1'>
                    <ProjectView />    
                </div>                
            </div>
        </div>
    );
}