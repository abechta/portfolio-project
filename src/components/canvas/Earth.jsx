import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./planet/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor={0x000000} />

      <primitive
        object={earth.scene}
        scale={isMobile ? 1.7 : 1.5}
        position={isMobile ? [0, -1.85, 0] : [0, -1.8, 0]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width:640px)');
    setIsMobile(mediaQuery.matches);
    const handlerMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handlerMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handlerMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-4, 3, 6], fov: 65, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
