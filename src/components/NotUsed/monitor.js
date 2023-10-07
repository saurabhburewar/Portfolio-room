import "./threeD.css";
import React, {useEffect } from "react";
import { Canvas, mesh, useLoader, primitive, color, useFrame, Tex } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import monitorModel from '../../static/models/monitor.gltf';


export default function Monitor() {

    const gltf = useLoader(GLTFLoader, monitorModel)
    const monitor = gltf.scene

    return (
        // <primitive object={monitor} scale={[5, 3, 2]} position={[-1, -4.5, -5]} />
        <primitive object={monitor} scale={5.5} position={[10, -2.85, -20]} rotation={[0, 2.7, 0]} />
    );
}