"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  Color,
  Group,
  Mesh,
  Vector3
} from "three";

const nodePositions = [
  new Vector3(-3.2, -0.55, 0.1),
  new Vector3(-1.35, 0.85, -0.45),
  new Vector3(0.55, -0.18, 0.35),
  new Vector3(2.2, 0.68, -0.2),
  new Vector3(3.4, -0.48, 0.3)
];

const nodeColors = ["#22d3ee", "#14b8a6", "#8b5cf6", "#22d3ee", "#14b8a6"];

function DataNetwork() {
  const group = useRef<Group>(null);
  const packets = useRef<Mesh[]>([]);

  const linePositions = useMemo(() => {
    const links = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [0, 2],
      [1, 3],
      [2, 4]
    ];

    return new Float32Array(
      links.flatMap(([start, end]) => [
        nodePositions[start].x,
        nodePositions[start].y,
        nodePositions[start].z,
        nodePositions[end].x,
        nodePositions[end].y,
        nodePositions[end].z
      ])
    );
  }, []);

  const particlePositions = useMemo(() => {
    const values: number[] = [];
    for (let index = 0; index < 120; index += 1) {
      values.push(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2.8
      );
    }
    return new Float32Array(values);
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = Math.sin(elapsed * 0.16) * 0.18 + state.pointer.x * 0.1;
      group.current.rotation.x = -0.08 + state.pointer.y * 0.04;
    }

    packets.current.forEach((packet, index) => {
      const start = nodePositions[index % (nodePositions.length - 1)];
      const end = nodePositions[(index % (nodePositions.length - 1)) + 1];
      const progress = (elapsed * (0.18 + index * 0.04) + index * 0.18) % 1;
      packet.position.lerpVectors(start, end, progress);
      packet.scale.setScalar(0.75 + Math.sin(elapsed * 2.4 + index) * 0.12);
    });
  });

  return (
    <group ref={group} position={[0.3, 0.05, 0]} rotation={[-0.08, -0.12, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#67e8f9"
          size={0.018}
          transparent
          opacity={0.52}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.32}
          blending={AdditiveBlending}
        />
      </lineSegments>

      {nodePositions.map((position, index) => (
        <mesh key={position.x} position={position}>
          <sphereGeometry args={[index === 2 ? 0.16 : 0.12, 24, 24]} />
          <meshStandardMaterial
            color={new Color(nodeColors[index])}
            emissive={new Color(nodeColors[index])}
            emissiveIntensity={1.25}
            roughness={0.28}
            metalness={0.18}
          />
        </mesh>
      ))}

      {[0, 1, 2, 3].map((index) => (
        <mesh
          key={index}
          ref={(node) => {
            if (node) {
              packets.current[index] = node;
            }
          }}
        >
          <sphereGeometry args={[0.055, 18, 18]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      ))}

      {[-1.7, -0.55, 0.55, 1.7].map((x, index) => (
        <mesh key={x} position={[x, -1.42, -0.25]}>
          <boxGeometry args={[0.34, 0.24 + index * 0.16, 0.18]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#14b8a6" : "#22d3ee"}
            emissive={index % 2 === 0 ? "#0f766e" : "#0891b2"}
            emissiveIntensity={0.55}
            transparent
            opacity={0.86}
          />
        </mesh>
      ))}

      <gridHelper args={[8, 28, "#22d3ee", "#1e293b"]} position={[0, -1.75, -0.45]} />
    </group>
  );
}

export function HeroDataScene() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0.1, 5.2], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true
      }}
    >
      <ambientLight intensity={0.65} />
      <pointLight position={[-2, 3, 3]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[3, -1, 2]} intensity={0.9} color="#8b5cf6" />
      <DataNetwork />
    </Canvas>
  );
}
