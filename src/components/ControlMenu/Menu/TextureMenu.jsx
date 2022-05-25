/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TEXTURES } from '../../../constants/textures';
import { coloringTexture } from '../../../store/actions/coloring/coloring.actions';
import { texturePrice } from '../../../store/actions/price/price.actions';

export const TextureMenu = ({ activeOption }) => {
  const dispatch = useDispatch();
  const handleTexture = (idx) => {
    dispatch(texturePrice(idx, activeOption));
    dispatch(coloringTexture(idx, activeOption));
  };
  return (
    <div className="textures">
      {TEXTURES.map((texture, idx) => (
        <div key={texture + idx}>
          <div className="textures__item" style={{ background: `url(${texture.texture})` }} onClick={() => handleTexture(idx)} />
          <span>{texture.title}</span>
        </div>
      ))}
    </div>
  );
};

TextureMenu.propTypes = {
  activeOption: PropTypes.string.isRequired,
};
