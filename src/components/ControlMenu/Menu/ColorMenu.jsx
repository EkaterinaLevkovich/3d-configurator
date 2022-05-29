/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../../constants/colors';
import { coloringColor, coloringCustomColor } from '../../../store/actions/coloring/coloring.actions';
import { colorPrice, customColorPrice } from '../../../store/actions/price/price.actions';

export const ColorMenu = ({ activeOption }) => {
  const dispatch = useDispatch();
  const getColor = (idx) => {
    dispatch(colorPrice(activeOption));
    dispatch(coloringColor(idx, activeOption));
  };
  const getCustomColor = (event) => {
    dispatch(customColorPrice(activeOption));
    dispatch(coloringCustomColor(event.target.value, activeOption));
  };
  return (
    <div className="colors">
      {COLORS.map((item, idx) => (
        <div key={item.color + idx} className="colors__item" style={{ background: `#${item.color}` }} onClick={() => getColor(idx)} title="5$" />
      ))}
      <div className="colors__custom">
        <p>CUSTOM COLOR</p>
        <input type="color" onChange={getCustomColor} defaultValue="#dab9b9" title="7$" />
      </div>
    </div>
  );
};

ColorMenu.propTypes = {
  activeOption: PropTypes.string.isRequired,
};
