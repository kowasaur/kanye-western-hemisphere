import React, { useState } from "react";
import { SpaceThingo } from "./SpaceThingo";
import earth from "../images/earth.png";
import { useFrame } from "react-three-fiber";

export interface EarthProps {
  isStopped: boolean;
  meshIndex: number;
  shapeIndex: number;
}

export const Earth: React.FC<EarthProps> = ({ isStopped, meshIndex, shapeIndex }) => {
  const [y, setY] = useState(0);
  const [speed, setSpeed] = useState(0.003);

  useFrame(() => {
    if (!isStopped) {
      setY(y + speed);
    }
  });

  const jolt = () => {
    setSpeed(0.3);
    setTimeout(() => {
      setSpeed(0.003);
    }, 400);
  };

  return (
    <SpaceThingo
      textureUrl={earth}
      radius={2}
      yRotation={y}
      onClick={jolt}
      meshIndex={meshIndex}
      shapeIndex={shapeIndex}
    />
  );
};
