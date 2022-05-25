import { useSelector } from 'react-redux';
import { priceSelector } from '../../store/selectors/price.selector';
import logo from '../../assets/image/Logo.svg';

export const Header = () => {
  const price = useSelector(priceSelector);
  const totalPrice = Object.values(price).reduce((a, b) => a + b, 0);
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <p>{totalPrice}</p>
    </div>
  );
};
