import "./monitor.css";
import * as THREE from 'three';
import React, { useContext, useEffect, useRef, useState } from "react";
import { Canvas, mesh, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import monitorModel from "../../static/models/monitor.glb";
import { Html } from "@react-three/drei";
import expData from '../../static/exp/exp.json';
// import { LockContext } from "../../contexts/lockContext";


export default function Room() {

    const gltf = useLoader(GLTFLoader, monitorModel)
    const monitor = gltf.scene
    const data = expData

    // const { cameraLock, dispatchLock } = useContext(LockContext);

    // const [clicked, setClicked] = useState(false);
    // const vec = new THREE.Vector3()


    // useFrame(state => {
    //     if (clicked) {
    //         state.camera.lookAt(new THREE.Vector3(-0.4, 4.2, 10))
    //         state.camera.position.lerp(vec.set(-0.4,5,4.7), 0.1)
    //         state.camera.updateProjectionMatrix()
    //         dispatchLock({type:"UNLOCK"})
    //     }
    //     return null;
    // })


    return (
        // <primitive object={monitor} onClick={() => setClicked(true)} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <primitive object={monitor} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Html className="content" scale={[1, 1, 1]} rotation={[0, Math.PI, 0]} position={[-0.4, 4.4, 6.36]} transform occlude>
                <div className="monitorscreen">
                    <div className="monitorbox">
                        {data.map(dataObj => (
                            <div className="monitorpost">
                                <div className="monitorline"></div>
                                <div className="monitoricon">
                                    <img src={dataObj.Pic}></img>
                                </div>
                                <div className="monitordate">{dataObj.Date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Html>
        </primitive>
    );
}
