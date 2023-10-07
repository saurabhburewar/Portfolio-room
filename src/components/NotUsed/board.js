import "./threeD.css";
import React, {useEffect } from "react";
import { Canvas, mesh, useLoader, primitive, color, useFrame, Tex } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import boardModel from '../../static/models/board.gltf';


export default function Board() {

    const gltf = useLoader(GLTFLoader, boardModel)
    const board = gltf.scene

    return (
        <primitive object={board} scale={[10, 10, 8]} position={[-20, 2, -30.5]} rotation={[0, -1.57, 0]}/>
    );
}