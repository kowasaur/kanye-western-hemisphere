import React, { useState } from "react";
import { useFrame } from "react-three-fiber";

import moon from "../images/moon.png";
import { EarthProps } from "./Earth";
import { SpaceThingo } from "./SpaceThingo";

export type xyz = [number, number, number];

export const Moon: React.FC<EarthProps> = ({ isStopped, meshIndex, shapeIndex }) => {
  const [position, setPosition] = useState<xyz>([3, 0, 3]);
  const [i, setI] = useState(3);

  const [speed, setSpeed] = useState(0.015);
  const [y, setY] = useState(0);

  useFrame(() => {
    if (!isStopped) {
      setY(y + speed);
      setPosition(isStopped ? position : [Math.sin(i) * 5, 0, Math.cos(i) * 5]);
      setI(i + 0.01);
    }
  });

  const jolt = () => {
    setSpeed(0.3);
    setTimeout(() => {
      setSpeed(0.015);
    }, 400);
  };

  return (
    <SpaceThingo
      textureUrl={moon}
      radius={0.5}
      position={position}
      yRotation={y}
      onClick={jolt}
      meshIndex={meshIndex}
      shapeIndex={shapeIndex}
    />
  );
};
