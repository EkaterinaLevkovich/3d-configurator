/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { extend, useThree } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import SofaMesh from './components/SofaMesh';
import Floor from './components/Floor';
import Sphere from './components/Sphere';

extend({ OrbitControls });
export const Scene = ({ coloring }) => {
  const {
    scene, camera,
    gl: { domElement, shadowMap },
  } = useThree();

  useEffect(() => {
    const [, directionalLight] = scene.children;
    scene.background = new THREE.Color(coloring.colorBackground);
    camera.fov = 50;
    directionalLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    shadowMap.enabled = true;
  }, [coloring.colorBackground]);
  return (
    <>
      <orbitControls
        args={[camera, domElement]}
        maxDistance={10}
      />
      <hemisphereLight
        skycolor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        intensity={0.61}
        position={[0, 50, 0]}
      />
      <directionalLight
        color={new THREE.Color(0xffffff)}
        intensity={0.54}
        position={[-8, 12, 8]}
        castShadow
      />
      <Suspense fallback={null}>
        <SofaMesh coloring={coloring} />
        <Floor coloring={coloring} />
        <Sphere coloring={coloring} />
      </Suspense>
    </>
  );
};

Scene.propTypes = {
  coloring: PropTypes.shape({
    colorBackground: PropTypes.number.isRequired,
  }),
};
