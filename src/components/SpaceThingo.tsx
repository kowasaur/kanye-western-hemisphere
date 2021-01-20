// The name's cause I don't know the word for a planet/moon
import { Sphere, useTexture } from "drei";
import React, { useRef } from "react";

interface SpaceThingoProps {
  textureUrl: string;
  radius: number;
  position?: [number, number, number];
  yRotation: number;
  onClick: () => void;
}

export const SpaceThingo: React.FC<SpaceThingoProps> = ({
  textureUrl,
  radius,
  position,
  yRotation,
  onClick,
}) => {
  const texture = useTexture(textureUrl);

  return (
    <Sphere
      args={[radius, 69, 69]}
      castShadow
      position={position}
      rotation={[0, yRotation, 0]}
      onClick={onClick}
    >
      <meshStandardMaterial attach="material" metalness={0.1} map={texture} />
    </Sphere>
  );
};
