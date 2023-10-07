import "./threeD.css";
import React, {useEffect } from "react";
import { Canvas, mesh, useLoader, primitive, color, useFrame, Tex } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import laptopModel from '../../static/models/laptop.gltf';


export default function Laptop() {

    const gltf = useLoader(GLTFLoader, laptopModel)
    const laptop = gltf.scene

    return (
        // <primitive object={monitor} scale={[5, 3, 2]} position={[-1, -4.5, -5]} />
        <primitive object={laptop} scale={2.5} position={[-9, -11.7, -18]} rotation={[0, -1, 0]} />
    );
}