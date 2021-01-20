import { Sphere, useTexture } from "drei";
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import earth from "../images/earth.png";

interface EarthProps {
  isStopped: boolean;
}

export const Earth: React.FC<EarthProps> = ({ isStopped }) => {
  const earthTexture = useTexture(earth);

  const ref = useRef(null);

  let speed = 0.003;

  useFrame(() => {
    if (!isStopped) {
      // @ts-ignore
      ref.current.rotation.y += speed;
    }
  });

  function jolt() {
    speed = 0.3;
    setTimeout(() => {
      speed = 0.003;
    }, 400);
  }

  return (
    // @ts-ignore
    <Sphere args={[2, 69, 69]} castShadow ref={ref} onClick={jolt}>
      <meshStandardMaterial attach="material" metalness={0.1} map={earthTexture} />
    </Sphere>
  );
};
