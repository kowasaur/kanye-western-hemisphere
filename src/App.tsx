import { OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

import { Earth } from "./components/Earth";

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
        </Suspense>

        <OrbitControls />
      </Canvas>

      <aside>
        <button onClick={() => setIsStopped(!isStopped)}>{isStopped ? "start" : "stop"}</button>
      </aside>
    </>
  );
}

export default App;
