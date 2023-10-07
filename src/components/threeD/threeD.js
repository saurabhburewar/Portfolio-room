import "./threeD.css";
import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import Room from "./room";
import Controls from "./controls";
import Monitor from "./monitor";
import Laptop from "./laptop";
import Tv from "./tv";
import BoardPaper from "./boardPaper";
import { LockContext } from "../../contexts/lockContext";
import { Link, useNavigate } from "react-router-dom";


function ThreeD() {

    const { cameraLock, dispatchLock } = useContext(LockContext);
    const navigate = useNavigate();

    const goBackTotwod = () => {
        dispatchLock({type:"DISCONNECT"})
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }

    return (
        <div className="threed">
            <div className={`threeMenu ${cameraLock==="unlock" ? "" : "threeMenuClosed"}`}>
                <div className="threeMenuBox">
                    Paused <br /> 
                    <p>( Press mouse to continue )</p> 
                    <div className="threeMenuReturn">
                        <button onClick={() => goBackTotwod()}>Return to 2D</button>
                    </div>
                </div>
            </div>
            <div className={`crosshair ${cameraLock==="unlock" ? "" : "crosshairShow"}`}></div>
            <Canvas camera={{ position: [0, 5.5, 0]}}>
                <color attach="background" args={["#93948e"]} />
                <ambientLight intensity={0.1} />
                <pointLight castShadow position={[-5.4, 9.8, 4.8]} intensity={0.1} />
                <pointLight castShadow position={[-5.4, 9.8, -5.4]} intensity={0.1} />
                <pointLight castShadow position={[4.5, 9.8, 4.8]} intensity={0.1} />
                <pointLight castShadow position={[4.5, 9.8, -5.4]} intensity={0.1} />
                <Suspense fallback={null}>
                    <Room />
                    <Monitor />
                    <Laptop />
                    <Tv />
                    <BoardPaper />
                </Suspense>
                <Controls />
            </Canvas>
        </div>
    )
}

export default ThreeD;