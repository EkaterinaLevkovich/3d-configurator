/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { priceSelector } from '../../store/selectors/price.selector';
import logo from '../../assets/image/Logo.svg';

export const Header = () => {
  const price = useSelector(priceSelector);
  const totalPrice = Object.values(price).reduce((a, b) => a + b, 0);
  const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="header__button">
        <p>{`Total: ${priceFormat}`}</p>
        <Link to="/3d-configurator/order/">
          <button type="button">Add order</button>
        </Link>
      </div>
    </div>
  );
};
