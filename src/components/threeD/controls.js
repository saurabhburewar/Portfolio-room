import { PointerLockControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LockContext } from "../../contexts/lockContext";

export default function Controls() {
    
    const { cameraLock, dispatchLock } = useContext(LockContext);
    const state = useThree();
    const camera = state.camera;
    const controlsRef = useRef();
    const [moveFor, setMoveFor] = useState(false);
    const [moveBack, setMoveBack] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);
    const [inArea, setInArea] = useState(true);

    useEffect(() => {
        if (cameraLock==="disconnect") {
            controlsRef.current.disconnect()
        }
    }, [cameraLock])

    useFrame((state) => {
        const vel = 0.2;
        if (state.camera.position.x < -6) {
            state.camera.position.x = -6
        }
        if (state.camera.position.x > 3.9) {
            state.camera.position.x = 3.9
        }
        if (state.camera.position.z > 1.5) {
            state.camera.position.z = 1.5
        }
        if (state.camera.position.z < -7) {
            state.camera.position.z = -7
        }
        if (moveFor && inArea) {
            controlsRef.current.moveForward(vel);
        } else if (moveBack && inArea) {
            controlsRef.current.moveForward(-vel);
        } else if (moveRight && inArea) {
            controlsRef.current.moveRight(vel);
        } else if (moveLeft && inArea) {
            controlsRef.current.moveRight(-vel);
        }
    })

    const keyPressDownFunc = (e) => {
        if (e.key === "w") {
            checkBoundary();
            setMoveFor(true);
        }
        else if (e.key === "s") {
            setMoveBack(true);
        }
        else if (e.key === "d") {
            setMoveRight(true);
        }
        else if (e.key === "a") {
            setMoveLeft(true);
        }
    }

    const keyPressUpFunc = (e) => {
        if (e.key === "w") {
            setMoveFor(false);
        }
        else if (e.key === "s") {
            setMoveBack(false);
        }
        else if (e.key === "d") {
            setMoveRight(false);
        }
        else if (e.key === "a") {
            setMoveLeft(false);
        }
    }

    const checkBoundary = () => {
        if (camera.position.z > 2 && camera.position.z < -2 && camera.position.x > 2 && camera.position.x < -2) {
            setInArea(false);
            console.log(inArea)
        }
        else {
            setInArea(true);
        }
    }

    if (controlsRef.current) {
        controlsRef.current.addEventListener("lock", () => {
            document.addEventListener("keydown", keyPressDownFunc);
            document.addEventListener("keyup", keyPressUpFunc);
            dispatchLock({type:"LOCK"})
        })
        controlsRef.current.addEventListener("unlock", () => {
            document.removeEventListener("keydown", keyPressDownFunc);
            document.removeEventListener("keyup", keyPressUpFunc);
            dispatchLock({type:"UNLOCK"})
        })
    }

    return (
        <PointerLockControls ref={controlsRef}/>
    );
}