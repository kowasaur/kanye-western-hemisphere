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

  useFrame(() => {
    if (!isStopped) {
      // @ts-ignore
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <Sphere args={[2, 69, 69]} castShadow ref={ref}>
      <meshStandardMaterial attach="material" metalness={0.1} map={earthTexture} />
    </Sphere>
  );
};
