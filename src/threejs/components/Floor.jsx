/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */
import * as THREE from 'three';
import PropTypes from 'prop-types';

const Floor = ({ coloring }) => {
  return (
    <mesh
      position={[0, -1, 0]}
      receiveShadow
      rotation={[-0.5 * Math.PI, 0, 0]}
    >
      <planeGeometry args={[100, 100, 1, 1]} />
      <meshPhongMaterial
        color={new THREE.Color(coloring.colorBackground)}
        shininess={0}
      />
    </mesh>
  );
};

export default Floor;

Floor.propTypes = {
  coloring: PropTypes.shape({
    colorBackground: PropTypes.number.isRequired,
  }),
};
