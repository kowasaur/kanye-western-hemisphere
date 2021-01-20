import React, { useState } from "react";
import { SpaceThingo } from "./SpaceThingo";
import earth from "../images/earth.png";
import { useFrame } from "react-three-fiber";

interface EarthProps {
  isStopped: boolean;
}

export const Earth: React.FC<EarthProps> = ({ isStopped }) => {
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

  return <SpaceThingo textureUrl={earth} radius={2} yRotation={y} onClick={jolt} />;
};
