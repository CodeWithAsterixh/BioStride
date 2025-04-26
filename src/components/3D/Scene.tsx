import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TinyBalls from "./TinyBalls";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />
      
      {/* Generate multiple tiny balls */}
      {Array.from({ length: 150 }).map((_, i) => (
        <TinyBalls key={i} />
      ))}
    </Canvas>
  );
};

export default Scene;
