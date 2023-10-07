import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef } from "react"  
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
// import Axe from "./Axe"


const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export default function Player() {
    
    const bodyref = useRef()
    const rapier = useRapier()
    const [, get] = useKeyboardControls()

    useFrame((state) => {
        const { forward, backward, left, right } = get()
        console.log(bodyref)
        const velocity = bodyref.current.linvel()

        // state.camera.position.set(...bodyref.current.translation())

        frontVector.set(0, 0, backward - forward)
        sideVector.set(left - right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
        bodyref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    })

    return (
        <RigidBody ref={bodyref} colliders={false} mass={1} type="dynamic" position={[0, 0, 0]} enabledRotations={[false, false, false]}>
            <CapsuleCollider args={[0.75, 0.5]} />
        </RigidBody>
    )
}