import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TinyBalls: React.FC = () => {
  const ballRef = useRef<THREE.Mesh>(null);

  // Random initial position within a larger range
  const initialPosition = new THREE.Vector3(
    (Math.random() - 0.5) * 10, // X: -5 to 5
    (Math.random() - 0.5) * 10, // Y: -5 to 5
    (Math.random() - 0.5) * 10  // Z: -5 to 5
  );

  // Random velocity for movement
  const velocity = useRef(new THREE.Vector3(
    (Math.random() - 0.5) * 0.02, // X velocity
    (Math.random() - 0.5) * 0.02, // Y velocity
    (Math.random() - 0.5) * 0.02  // Z velocity
  ));

  // Animation loop
  useFrame(() => {
    if (ballRef.current) {
      // Update position
      ballRef.current.position.add(velocity.current);

      // Check boundaries and reverse direction if needed
      if (ballRef.current.position.x > 5 || ballRef.current.position.x < -5) {
        velocity.current.x = -velocity.current.x;
      }
      if (ballRef.current.position.y > 5 || ballRef.current.position.y < -5) {
        velocity.current.y = -velocity.current.y;
      }
      if (ballRef.current.position.z > 5 || ballRef.current.position.z < -5) {
        velocity.current.z = -velocity.current.z;
      }

      // Rotate the ball
      ballRef.current.rotation.x += 0.01;
      ballRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ballRef} position={initialPosition}>
      <sphereGeometry args={[0.1, 22, 22]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

export default TinyBalls;