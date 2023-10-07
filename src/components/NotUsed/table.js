import "./threeD.css";
import React, {useEffect } from "react";
import { Canvas, mesh, useLoader, primitive, color, useFrame, Tex } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import tableModel from '../../static/models/table_embed.gltf';


export default function Table() {

    const gltf = useLoader(GLTFLoader, tableModel)
    const table = gltf.scene

    return (
        <primitive object={table} scale={[10, 7, 6]} position={[-1, -13, -20]} />
    );
}