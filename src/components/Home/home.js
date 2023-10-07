import React, { useContext } from "react"; 
import "./home.css";
import Nav from "../Nav/nav";
import About from "../About/about";
import Contact from "../Contact/contact";
import Skills from "../Skills/skills";
import Projects from "../Projects/projects";
import Experience from "../Experience/experience";
import { PageContext } from "../../contexts/context";



const CondRender = (page) => {
    const { currentPage } = useContext(PageContext);
    if ("about".localeCompare(currentPage) === 0) {
        return <About />
    } else if ("contact".localeCompare(currentPage) === 0) {
        return <Contact />
    } else if ("skills".localeCompare(currentPage) === 0) {
        return <Skills />
    } else if ("projects".localeCompare(currentPage) === 0) {
        return <Projects />
    } else if ("experience".localeCompare(currentPage) === 0) {
        return <Experience />
    }
}

function Home() {

    return (
        <div className="home">
            <div className="navContainer">
                <Nav />
            </div>
            <div className="infoContainer">
                <CondRender />
            </div>
        </div>
    )
}

export default Home;