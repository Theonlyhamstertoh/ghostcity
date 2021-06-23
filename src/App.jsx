import "./sass/App.scss";
import { Canvas, extend, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Controls, useControl, withControls } from "react-three-gui";
import { Suspense, useRef, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 100, 100], fov: 75 }}>
      <OrbitControls />
      <fog attach="fog" args={["#281a38", 0, 150]} />
      <color args={["#281a38"]} attach="background" />
      <Suspense fallback={null}>
        <Plane />
        {makeBuildingsComponents(700)}
      </Suspense>
    </Canvas>
  );
}

function makeBuildingsComponents(count) {
  const components = [];

  for (let i = 0; i < count; i++) {
    components.push(<Building key={uuid()} />);
  }
  return components;
}

function Building() {
  const x = Math.floor((Math.random() - 0.5) * 195);
  const z = Math.floor((Math.random() - 0.5) * 195);

  const height = Math.floor(Math.random() * 20) + 7;
  const thickness = Math.floor(Math.random() * 4) + 4;
  return (
    <mesh position={[x, height / 2, z]}>
      <boxBufferGeometry args={[thickness, height, thickness]} />
      <meshBasicMaterial color="#514fa7" />
    </mesh>
  );
}
function Plane() {
  return (
    <mesh position={[0, -2, 0]}>
      <boxBufferGeometry args={[200, 4, 200]} />
      <meshBasicMaterial color="#514fa7" />
    </mesh>
  );
}
export default function App() {
  return <Scene />;
}
