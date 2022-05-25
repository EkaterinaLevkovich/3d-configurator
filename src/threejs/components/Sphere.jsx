/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */
import * as THREE from 'three';
import PropTypes from 'prop-types';

const Sphere = ({ coloring }) => {
  return (
    <mesh
      position={[0, -0.9, 0]}
      rotation={[0, 0, 0]}
    >
      <sphereGeometry args={[-50, 16, 16]} />
      <meshBasicMaterial
        color={new THREE.Color(coloring.colorBackground)}
      />
    </mesh>
  );
};

export default Sphere;

Sphere.propTypes = {
  coloring: PropTypes.shape({
    colorBackground: PropTypes.number.isRequired,
  }),
};
