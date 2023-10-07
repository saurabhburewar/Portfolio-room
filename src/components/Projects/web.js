import React from "react";
import projectsData from '../../static/projects/projects.json';


export default function Web() {

    const data = projectsData.Web

    return (
        <div id='webPage'>
            {data.map(dataObj => (
            <div className="proBox">
                <div className="proPic">
                    <img src={dataObj.Pic}></img>
                </div>
                <div className="proDesc">
                    <div className="proDesc1">
                        <div className="proTitle">{dataObj.Title}</div>
                        <div className="proDateLink">
                            <div className="proDate">{dataObj.Date}</div>
                            <a href={dataObj.Link} className="proLink" target="_blank"></a>
                        </div>
                        <div className="proText">{dataObj.Description}</div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}