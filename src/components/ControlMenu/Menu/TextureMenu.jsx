/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
        <div key={texture.title + idx}>
          <div
            className="textures__item"
            style={
              (activeOption === 'legs' && texture.title === 'wood')
                ? { background: `url(${texture.texture})` }
                : (activeOption !== 'legs' && texture.title !== 'wood')
                  ? { background: `url(${texture.texture})` }
                  : { background: `url(${texture.texture})`, opacity: 0.3, pointerEvents: 'none' }
            }
            onClick={() => handleTexture(idx)}
            title={`${texture.price}$`}
          />
          <span>{texture.title}</span>
        </div>
      ))}
    </div>
  );
};

TextureMenu.propTypes = {
  activeOption: PropTypes.string.isRequired,
};
