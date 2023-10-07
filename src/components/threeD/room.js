import "./threeD.css";
import React, { useEffect } from "react";
import { Canvas, mesh, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import wallModel from "../../static/models/walls.glb";
import doorModel from "../../static/models/door.glb";
import boardModel from "../../static/models/board.glb";
import lightModel from "../../static/models/lights.glb";
import tableModel from "../../static/models/table.glb";
import stuffModel from "../../static/models/tableStuff.glb";
import frameModel from "../../static/models/photoFrame.glb";
import furnitureModel from "../../static/models/furniture.glb";
import chairModel from "../../static/models/chair.glb";
import couchModel from "../../static/models/couch.glb";
import bedModel from "../../static/models/flowerbed.glb";

export default function Room() {

    const gltf1 = useLoader(GLTFLoader, wallModel)
    const gltf2 = useLoader(GLTFLoader, boardModel)
    const gltf3 = useLoader(GLTFLoader, lightModel)
    const gltf4 = useLoader(GLTFLoader, doorModel)
    const gltf5 = useLoader(GLTFLoader, tableModel)
    const gltf6 = useLoader(GLTFLoader, stuffModel)
    const gltf7 = useLoader(GLTFLoader, frameModel)
    const gltf8 = useLoader(GLTFLoader, furnitureModel)
    const gltf9 = useLoader(GLTFLoader, chairModel)
    const gltf10 = useLoader(GLTFLoader, couchModel)
    const gltf11 = useLoader(GLTFLoader, bedModel)
    const wall = gltf1.scene
    const board = gltf2.scene
    const lights = gltf3.scene
    const door = gltf4.scene
    const table = gltf5.scene
    const stuff = gltf6.scene
    const frame = gltf7.scene
    const furniture = gltf8.scene
    const chair = gltf9.scene
    const couch = gltf10.scene
    const flowerbed = gltf11.scene

    return (
        <>
            <primitive object={wall} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={board} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={lights} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={door} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={table} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={stuff} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={frame} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={furniture} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={chair} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={couch} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
            <primitive object={flowerbed} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}></primitive>
        </>
    );
}
