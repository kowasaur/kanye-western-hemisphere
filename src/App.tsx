import { OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

import { Earth } from "./components/Earth";
import { Moon } from "./components/Moon";

const meshes = ["normal", "wobble", "distort"];
const shapes = [
  "sphere",
  "cone",
  "cube",
  "disk",
  "torus",
  "torus knot",
  "tetrahedron",
  "dodecahedron",
];

function App() {
  const [isStopped, setIsStopped] = useState(false);
  const [meshIndex, setMeshIndex] = useState(0);
  const [shapeIndex, setShapeIndex] = useState(0);

  function newIndex(currentIndex: number, array: string[]) {
    const lastIndex = array.length - 1;
    return !(currentIndex - lastIndex) ? 0 : currentIndex + 1;
  }

  return (
    <>
      <Canvas shadowMap>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.5} castShadow position={[5, 3, 5]} />

        <Stars />

        <Suspense fallback={null}>
          <Earth isStopped={isStopped} meshIndex={meshIndex} shapeIndex={shapeIndex} />
          <Moon isStopped={isStopped} meshIndex={meshIndex} shapeIndex={shapeIndex} />
        </Suspense>

        <OrbitControls />
      </Canvas>

      <aside>
        <button onClick={() => setIsStopped(!isStopped)}>{isStopped ? "Start" : "Stop"}</button>
        <button onClick={() => setMeshIndex(newIndex(meshIndex, meshes))}>
          {meshes[newIndex(meshIndex, meshes)]}
        </button>
        <button onClick={() => setShapeIndex(newIndex(shapeIndex, shapes))}>
          {shapes[newIndex(shapeIndex, shapes)]}
        </button>
        <a
          href="https://github.com/kowasaur/kanye-western-hemisphere"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Github</button>
        </a>
      </aside>
    </>
  );
}

export default App;
