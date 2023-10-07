import "./threeD.css";
import React, {useEffect, useRef, useState } from "react";
import { Canvas, mesh, useLoader, primitive, color, useFrame, Tex, useThree } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import phoneModel from '../../static/models/hand_embed.gltf'
import instaImg from '../../static/3d/insta.png'
import mailImg from '../../static/3d/mail.png'
import githubImg from '../../static/3d/github.png'
import linkedinImg from '../../static/3d/linkedin.png'
import twodImg from '../../static/3d/2d.png'
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';

let tlStart = gsap.timeline();
let tlEnd = gsap.timeline();

export default function Phone() {

    const [hover, setHover] = useState(5);
    
    const navigate = useNavigate();
    const gltf = useLoader(GLTFLoader, phoneModel);
    const instatex = useLoader(TextureLoader, instaImg);
    const mailtex = useLoader(TextureLoader, mailImg);
    const githubtex = useLoader(TextureLoader, githubImg);
    const linkedintex = useLoader(TextureLoader, linkedinImg);
    const twodtex = useLoader(TextureLoader, twodImg);
    
    const phone = gltf.scene
    const insta = React.useRef();
    const mail = React.useRef();
    const github = React.useRef();
    const linkedin = React.useRef();
    const twod = React.useRef();

    useEffect(() => {
        tlStart.add('start')
            .to(phone.position, {x:8, y:-4, duration: 2, delay: 1 }, 'start')
            .to(phone.rotation, {x:-0.2, y:-0.6, z:0,  duration: 2, delay: 1 }, 'start')
            .to(phone.scale, {x:1.5, y:1.5, z:1.5, duration: 2, delay: 1 }, 'start')
            .to(insta.current.material, {opacity:1, duration: 1, delay: 3 }, 'start')
            .to(mail.current.material, {opacity:1, duration: 1, delay: 3 }, 'start')
            .to(github.current.material, {opacity:1, duration: 1, delay: 3 }, 'start')
            .to(linkedin.current.material, {opacity:1, duration: 1, delay: 3 }, 'start')
            .to(twod.current.material, {opacity:1, duration: 1, delay: 3 }, 'start')
    }); 

    const handleClick = () => {
        console.log(insta)
        tlEnd.add('end')
            .to(insta.current.material, {opacity:0, duration: 1 }, 'end')
            .to(mail.current.material, {opacity:0, duration: 1 }, 'end')
            .to(github.current.material, {opacity:0, duration: 1 }, 'end')
            .to(linkedin.current.material, {opacity:0, duration: 1 }, 'end')
            .to(twod.current.material, {opacity:0, duration: 1 }, 'end')
            .to(phone.position, {x:-6, y:-11, duration: 2, delay: 1 }, 'end')
            .to(phone.rotation, {x:0, y:-0.1, z:-1.5,  duration: 2, delay: 1 }, 'end')
            .to(phone.scale, {x:5, y:5, z:5, duration: 2, delay: 1 }, 'end')
        setTimeout(function() {
            navigate("/");
        }, 4000);
    }

    return (
        <group>
            {/* <primitive object={gltf.scene} scale={1.5} position={[8, -4, 0]} rotation={[-0.2, -0.6, 0]} /> */}
            <primitive object={gltf.scene} scale={5} position={[-6, -11, 0]} rotation={[0, -0.1, -1.5]} />
            <mesh ref={insta} onClick={() => window.open("https://www.instagram.com/qwerty_pencils/")} onPointerEnter={() => setHover()} name="whatsapp" scale={0.025} position={[5.25, -2, -1.5]} rotation={[-0.3, -0.5, -0.15]}>
                <planeGeometry args={[10, 10]} />
                <meshLambertMaterial map={instatex} opacity="0" transparent="true"/>
            </mesh>
            <mesh ref={mail} onClick={() => window.open("mailto:saurabh.skbr@gmail.com")} name="mail" scale={0.025} position={[4.85, -1.5, -1.9]} rotation={[-0.3, -0.5, -0.15]}>
                <planeGeometry args={[10, 10]} />
                <meshLambertMaterial map={mailtex} opacity="0" transparent="true"/>
            </mesh>
            <mesh ref={github} onClick={() => window.open("https://github.com/saurabhburewar")} name="github" scale={0.025} position={[4.8, -2, -1.8]} rotation={[-0.3, -0.5, -0.15]}>
                <planeGeometry args={[10, 10]} />
                <meshLambertMaterial map={githubtex} opacity="0" transparent="true"/>
            </mesh>
            <mesh ref={linkedin} onClick={() => window.open("https://www.linkedin.com/in/saurabh-burewar-355131185/")} name="linkedin" scale={0.025} position={[5.3, -1.5, -1.6]} rotation={[-0.3, -0.5, -0.15]}>
                <planeGeometry args={[10, 10]} />
                <meshLambertMaterial map={linkedintex} opacity="0" transparent="true"/>
            </mesh>
            <mesh ref={twod} onClick={handleClick} name="twod" scale={[0.04, 0.03, 0.03]} position={[4.95, -2.8, -1.45]} rotation={[-0.3, -0.5, -0.15]}>
                <planeGeometry args={[10, 10]} />
                <meshLambertMaterial map={twodtex} opacity="0" transparent="true"/>
            </mesh>
        </group>
    );
}