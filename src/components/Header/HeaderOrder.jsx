/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import logo from '../../assets/image/Logo.svg';

export const HeaderOrder = () => {
  return (
    <div className="header__order">
      <Link to="/3d-configurator/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
