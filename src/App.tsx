import { OrbitControls, Plane, Sphere, Stars, useTexture } from "drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

import plane from "./images/plane.png";
import { Earth } from "./components/Earth";

function App() {
  const planeTexture = useTexture(plane);

  return (
    <>
      <Canvas shadowMap>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.5} castShadow position={[5, 3, 5]} />
        {/* <pointLight position={[-10, 0, 20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1} /> */}

        <Stars />
        {/* <Plane
          args={[100, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -10, 0]}
          receiveShadow
        >
          <meshStandardMaterial attach="material" map={planeTexture} color="grey" />
        </Plane> */}
        <Suspense fallback={null}>
          <Earth />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
