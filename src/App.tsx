import { OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

import { Earth } from "./components/Earth";
import { Moon } from "./components/Moon";

function App() {
  const [isStopped, setIsStopped] = useState(false);

  return (
    <>
      <Canvas shadowMap>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.5} castShadow position={[5, 3, 5]} />

        <Stars />

        <Suspense fallback={null}>
          <Earth isStopped={isStopped} />
          <Moon isStopped={isStopped} />
        </Suspense>

        <OrbitControls />
      </Canvas>

      <aside>
        <button onClick={() => setIsStopped(!isStopped)}>{isStopped ? "start" : "stop"}</button>
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
