/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { coloringSelector } from '../../store/selectors/coloring.selector';
import { priceSelector } from '../../store/selectors/price.selector';
import { Form } from './Form/Form';

export const Info = () => {
  const coloring = useSelector(coloringSelector);
  const price = useSelector(priceSelector);
  const totalPrice = Object.values(price).reduce((a, b) => a + b, 0);
  const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice);
  const [activeForm, setActiveForm] = useState(true);
  const hideForm = () => {
    setActiveForm(false);
  };
  return (
    <div className="order__info">
      <h2>Information <span>about order</span></h2>
      <p>Selected armrest color: {coloring.armrest}</p>
      <p>Selected back color: {coloring.back}</p>
      <p>Selected back cushion color: {coloring.backCushion}</p>
      <p>Selected base color: {coloring.base}</p>
      <p>Selected legs color: {coloring.legs}</p>
      <p>Selected seat cushion color: {coloring.seatCushion}</p>
      <p>Length: 201 cm</p>
      <p>Height: 84 cm</p>
      <p>Depth: 76 cm</p>
      <p>Frame material: wood</p>
      <p>Triple sofa</p>
      <p><span>Total: </span>{priceFormat}</p>
      {activeForm
        ? <Form hideForm={hideForm} />
        : <p className="message">Thank you. We have received your order. The manager will contact you shortly</p>}
      <div className="order__info__button">
        <Link to="/3d-configurator/">
          <button type="button">back</button>
        </Link>
      </div>
    </div>
  );
};
