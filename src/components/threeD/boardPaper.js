import "./board.css"
import React, { useEffect } from "react";
import { Canvas, mesh, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import paperModel from "../../static/models/boardPaper.glb";
import { Html } from "@react-three/drei";
import aboutdata from '../../static/about/about.json';

export default function BoardPaper() {

    const gltf = useLoader(GLTFLoader, paperModel)
    const paper = gltf.scene
    const data = aboutdata

    return (
        <primitive object={paper} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Html className="boardContent" rotation={[0, Math.PI, 0]} position={[2.85, 5.2, 7.48]} transform occlude>
                <div className="boardbox">
                    <div className="boardimg"></div>
                    <div className="boardinfo">{data.info}</div>
                    <div className="boardname">Saurabh Burewar</div>
                </div>
            </Html>
        </primitive>
    );
}
