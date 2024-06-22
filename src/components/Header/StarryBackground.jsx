// src/StarryBackground.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, OrbitControls } from '@react-three/drei';

function Stars() {
  const ref = useRef();

  // Generate star positions once and memoize the result for performance
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 5000; i++) {
      pos.push((Math.random() - 0.5) * 10);
      pos.push((Math.random() - 0.5) * 10);
      pos.push((Math.random() - 0.5) * 10);
    }
    return new Float32Array(pos);
  }, []);

  // Rotate the stars slowly
  useFrame(() => {
    ref.current.rotation.x += 0.0005;
    ref.current.rotation.y += 0.0005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3}>
        <PointMaterial color="#ffffff" size={0.01} sizeAttenuation={true} />
      </Points>
    </group>
  );
}

export default function StarryBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
}
