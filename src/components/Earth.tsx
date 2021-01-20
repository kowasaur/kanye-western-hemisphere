import { Sphere, useTexture } from "drei";
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

import earth from "../images/earth.png";

interface EarthProps {}

export const Earth: React.FC<EarthProps> = ({}) => {
  const earthTexture = useTexture(earth);

  const ref = useRef(null);
  // @ts-ignore
  useFrame(() => (ref.current.rotation.y += 0.003));

  return (
    <Sphere args={[2, 69, 69]} castShadow ref={ref}>
      <meshStandardMaterial attach="material" metalness={0.1} map={earthTexture} />
    </Sphere>
  );
};
