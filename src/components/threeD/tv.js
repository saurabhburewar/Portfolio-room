import "./tv.css";
import React, { useEffect } from "react";
import { Canvas, mesh, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import tvModel from "../../static/models/tv.glb";
import { Html } from "@react-three/drei";
import projectdata from "../../static/projects/projects.json";

export default function Tv() {

    const gltf = useLoader(GLTFLoader, tvModel)
    const tv = gltf.scene
    const data = projectdata.Favourites;

    return (
        <primitive object={tv} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Html className="tvcontent" rotation={[0, Math.PI/2, 0]} position={[-7.93, 5.55, -1.22]} transform occlude>
                <div className="tvbox">
                    {data.map(dataObj => (
                        <div className="tvsection">
                            <div className="tvsectioninside">
                                <div className="tvsectionimg">
                                    <img src={dataObj.Pic}></img>
                                </div>
                                <div className="tvsectiontitle">{dataObj.Title}</div>
                                <div className="tvsectioninfo">{dataObj.Description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Html>
        </primitive>
    );
}
