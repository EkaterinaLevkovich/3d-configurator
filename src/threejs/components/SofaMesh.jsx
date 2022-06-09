/* eslint-disable no-restricted-syntax */
/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */
/* eslint-disable no-void */
/* eslint-disable prefer-const */
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../assets/models/Sofa.glb';

const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: new THREE.Color(0xcda7a7),
  shininess: 10,
});

const INITIAL_MAP = [
  { childID: 'armrest', mtl: INITIAL_MTL },
  { childID: 'back', mtl: INITIAL_MTL },
  { childID: 'backCushion', mtl: INITIAL_MTL },
  { childID: 'base', mtl: INITIAL_MTL },
  { childID: 'legs', mtl: INITIAL_MTL },
  { childID: 'seatCushion', mtl: INITIAL_MTL },
];

const initColor = (parent, type, mtl) => {
  parent.traverse((obj) => {
    if (obj.isMesh && obj.name.includes(type)) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      obj.material = mtl;
      obj.nameID = type;
    }
  });
};

const SofaMesh = ({ coloring }) => {
  const { scene: theModel } = useLoader(GLTFLoader, model);
  const sofa = useRef(theModel);

  useEffect(() => void setMaterial(coloring.activeOption, coloring.newMTL), [coloring.newMTL]);

  useEffect(() => {
    if (theModel) {
      for (let object of INITIAL_MAP) {
        initColor(theModel, object.childID, object.mtl);
      }
    }
  }, [theModel]);
  const setMaterial = (type, mtl) => {
    theModel.traverse(obj => {
      if (obj.isMesh && obj.nameID !== null) {
        if (obj.nameID === type) {
          obj.material = mtl;
        }
      }
    });
  };

  return (
    <primitive
      ref={sofa}
      object={theModel}
      scale={[2, 2, 2]}
      position={[0, -1, 0]}
      receiveShadow
      castShadow
    />
  );
};

export default SofaMesh;

SofaMesh.propTypes = {
  coloring: PropTypes.shape({
    activeOption: PropTypes.string.isRequired,
    newMTL: PropTypes.objectOf.isRequired,
  }),
};
