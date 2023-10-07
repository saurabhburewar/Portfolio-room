import "./threeD.css";
import React, { useEffect } from "react";
import { Canvas, mesh, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import laptopModel from "../../static/models/laptop.glb";
import { Html } from "@react-three/drei";
import skillsimg from "../../static/3d/threeskills.JPG";

export default function Laptop() {

    const gltf = useLoader(GLTFLoader, laptopModel)
    const laptop = gltf.scene

    return (
        <primitive object={laptop} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Html className="laptopContent" rotation={[0.45, 3.56, 0.18]} position={[2.22, 3.35, 6]} transform occlude>
                <div style={{width:'100%', height:'100%', overflow:'hidden'}}>
                    <img src={skillsimg} style={{width:'100%', height:'100%'}}></img>
                </div>
            </Html>
        </primitive>
    );
}
