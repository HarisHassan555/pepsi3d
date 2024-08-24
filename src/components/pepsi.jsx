import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const RotatingModel = ({ scene }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.03;
    }
  });

  const tiltAngle = THREE.MathUtils.degToRad(-2);

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[3, 3, 3]}
      position={[0, -0.36, 0]}
      rotation={[tiltAngle, 0, 0]}
    />
  );
};

const SimpleModel = () => {
  const { scene } = useGLTF('/pepsi_can/scene.gltf');
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);

    setCameraPosition([center.x, center.y, center.z + 0.5]);
  }, [scene]);

  return (
    <Canvas className='basis-3/4 lg:basis-4/5 px-[2rem] lg:px-0'>
      <PerspectiveCamera makeDefault position={cameraPosition} fov={75} />
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 1, 3]} intensity={4} />
      <RotatingModel classname='self-center' scene={scene} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SimpleModel;
