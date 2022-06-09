/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { OPTIONS } from '../../../constants/options';

export const OptionMenu = ({ activeOption, setActiveOption }) => {
  return (
    <div className="optionMenu">
      {OPTIONS.map(({ name, img }) => (
        <img src={img} alt={name} className={`optionMenu__option${activeOption === name ? '--is-active' : ''}`} data-option={name} onClick={() => setActiveOption(name)} key={name} />
      ))}
    </div>
  );
};

OptionMenu.propTypes = {
  activeOption: PropTypes.string.isRequired,
  setActiveOption: PropTypes.func.isRequired,
};
