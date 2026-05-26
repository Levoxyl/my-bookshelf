import React, { useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ModularBook({ 
  pageCount = 300, 
  customWidth, 
  customHeight, 
  spineColor = '#2c3e50',
  backColor = '#2c3e50',
  title = "Unknown Title"
}) {
  // Build an isolated HTML canvas purely in JavaScript memory (out of the render tree)
  const offscreenCanvas = useMemo(() => document.createElement('canvas'), []);
  const textureRef = useRef(null);

  const thickness = useMemo(() => (pageCount * 0.006) + 0.4, [pageCount]);
  const width = customWidth || 14.0;   
  const height = customHeight || 21.5; 

  // Repaint the canvas image whenever data updates
  useEffect(() => {
    const canvas = offscreenCanvas;
    const ctx = canvas.getContext('2d');

    canvas.width = 256;
    canvas.height = 1024;

    ctx.fillStyle = spineColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff'; 
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Math.PI / 2); 
    
    const displayedText = title.length > 35 ? title.substring(0, 32) + '...' : title;
    ctx.fillText(displayedText, 0, 0);
    ctx.restore();

    // Force texture reload trigger frame update
    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }, [title, spineColor, offscreenCanvas]);

  const pageMaterial = useMemo(() => new THREE.MeshStandardMaterial({ color: '#fcfaf2', roughness: 0.8 }), []);

  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[width, height, thickness]} />

      <primitive attach="material-0" object={pageMaterial} /> 
      
      {/* Spine Face */}
      <meshStandardMaterial attach="material-1" roughness={0.6}>
        <canvasTexture ref={textureRef} attach="map" image={offscreenCanvas} />
      </meshStandardMaterial>

      <primitive attach="material-2" object={pageMaterial} />
      <primitive attach="material-3" object={pageMaterial} />
      
      <meshStandardMaterial attach="material-4" color="#e74c3c" roughness={0.5} />
      <meshStandardMaterial attach="material-5" color={backColor} roughness={0.5} />
    </mesh>
  );
}