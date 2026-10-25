import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";

const INK = "#12131a";
const PAPER = "#f4f4f1";
const BLUE = "#1d4fff";

function Monogram({ dark, reduced }: { dark: boolean; reduced: boolean }) {
  const group = useRef<Group>(null);
  const metal = dark ? PAPER : INK;

  useFrame((state, delta) => {
    const node = group.current;
    if (!node) return;
    const step = Math.min(delta, 0.05);
    if (!reduced) node.rotation.y += step * 0.28;
    const targetX = state.pointer.y * 0.18;
    node.rotation.x = MathUtils.lerp(node.rotation.x, targetX, 0.06);
    node.position.x = MathUtils.lerp(node.position.x, state.pointer.x * 0.18, 0.06);
  });

  const nodes = useMemo(
    () =>
      [
        [-1.55, 0.72, -0.35],
        [-1.2, -0.85, -0.15],
        [1.45, 0.9, -0.45],
        [1.2, -0.62, -0.2],
        [0.15, 1.25, -0.55],
        [-0.35, -1.25, -0.1],
        [1.7, 0.05, -0.7],
        [-1.7, 0.05, -0.6],
      ] as const,
    [],
  );

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.15, 0.15, 0.4]} position={[0, 0, -0.35]}>
        <torusGeometry args={[1.22, 0.035, 12, 64, Math.PI * 1.45]} />
        <meshStandardMaterial
          color={BLUE}
          emissive={BLUE}
          emissiveIntensity={dark ? 0.55 : 0.28}
          metalness={0.35}
          roughness={0.32}
        />
      </mesh>

      <mesh position={[-0.26, -0.02, 0]} rotation={[0, 0, 0.36]}>
        <boxGeometry args={[0.075, 1.28, 0.075]} />
        <meshStandardMaterial color={metal} metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh position={[0.26, -0.02, 0]} rotation={[0, 0, -0.36]}>
        <boxGeometry args={[0.075, 1.28, 0.075]} />
        <meshStandardMaterial color={metal} metalness={0.72} roughness={0.22} />
      </mesh>
      <mesh position={[0, -0.16, 0]}>
        <boxGeometry args={[0.46, 0.07, 0.075]} />
        <meshStandardMaterial color={BLUE} metalness={0.4} roughness={0.3} />
      </mesh>

      {nodes.map((position) => (
        <mesh key={position.join(",")} position={position}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={0.4} />
        </mesh>
      ))}

      <mesh position={[0, -0.15, -0.85]} rotation={[-0.4, 0.2, 0]}>
        <planeGeometry args={[3.4, 2.2]} />
        <meshStandardMaterial
          color={dark ? "#12182c" : "#d7def2"}
          metalness={0.15}
          roughness={0.85}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

export default function MarkScene({
  dark,
  reduced,
}: {
  dark: boolean;
  reduced: boolean;
}) {
  return (
    <Canvas
      aria-hidden
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.05, 3.55], fov: 38 }}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={[dark ? "#07080c" : "#f4f4f1"]} />
      <ambientLight intensity={dark ? 0.35 : 0.7} />
      <directionalLight position={[2.5, 3, 2]} intensity={dark ? 1.3 : 1.6} />
      <pointLight position={[-2, 1, 2]} color={BLUE} intensity={dark ? 8 : 4} distance={8} />
      <Monogram dark={dark} reduced={reduced} />
    </Canvas>
  );
}
