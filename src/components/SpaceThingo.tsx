// The name's cause I don't know the word for a planet/moon
import {
  Box,
  Cone,
  Cylinder,
  Dodecahedron,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
  useTexture,
} from "drei";
import React from "react";
import { xyz } from "./Moon";

interface SpaceThingoProps {
  textureUrl: string;
  radius: number;
  position?: [number, number, number];
  yRotation: number;
  onClick: () => void;
  meshIndex: number;
  shapeIndex: number;
}

export const SpaceThingo: React.FC<SpaceThingoProps> = ({
  textureUrl,
  radius,
  position,
  yRotation,
  onClick,
  meshIndex,
  shapeIndex,
}) => {
  const texture = useTexture(textureUrl);

  const meshArgs = {
    attach: "material",
    metalness: 0.1,
    map: texture,
  };

  const meshes = [
    <meshStandardMaterial {...meshArgs} />,
    <MeshWobbleMaterial {...meshArgs} stencilMask speed={6} factor={3} />,
    <MeshDistortMaterial {...meshArgs} stencilMask speed={6} distort={Math.sin(yRotation) * 2} />,
  ];

  const mesh = meshes[meshIndex];

  const shapeArgs = {
    castShadow: true,
    receiveShadow: true,
    position,
    rotation: [0, yRotation, 0] as xyz,
    onClick,
  };

  const allRotation = [yRotation, yRotation, yRotation] as xyz;

  const shapes = [
    <Sphere {...shapeArgs} args={[radius, 69, 69]}>
      {mesh}
    </Sphere>,
    <Cone {...shapeArgs} args={[radius, radius, 69]}>
      {mesh}
    </Cone>,
    <Box {...shapeArgs} args={[radius * 1.2, radius * 1.2, radius * 1.2]}>
      {mesh}
    </Box>,
    <Cylinder {...shapeArgs} args={[radius, radius, radius / 4, 69]}>
      {mesh}
    </Cylinder>,
    <Torus {...shapeArgs} args={[radius * 0.75, radius / 4]} rotation={allRotation}>
      {mesh}
    </Torus>,
    <TorusKnot {...shapeArgs} args={[radius * 0.75, radius / 6]} rotation={allRotation}>
      {mesh}
    </TorusKnot>,
    <Tetrahedron {...shapeArgs} args={[radius]} rotation={allRotation}>
      {mesh}
    </Tetrahedron>,
    <Dodecahedron {...shapeArgs} args={[radius]} rotation={allRotation}>
      {mesh}
    </Dodecahedron>,
  ];

  return shapes[shapeIndex];
};
