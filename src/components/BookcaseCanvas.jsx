import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import ModularBook from './ModularBook';

export default function BookcaseCanvas({ bookData }) {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <Canvas camera={{ position: [0, 5, 30], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 20, 10]} intensity={1.5} castShadow />
        <directionalLight position={[-10, 10, 5]} intensity={0.5} />

        <Center>
          <ModularBook 
            pageCount={bookData.pageCount} 
            customWidth={bookData.customWidth} 
            customHeight={bookData.customHeight} 
            spineColor={bookData.spineColor}
            backColor={bookData.spineColor}
            title={bookData.title}
          />
        </Center>

        <OrbitControls enableZoom={true} minDistance={5} maxDistance={50} />
      </Canvas>
    </div>
  );
}