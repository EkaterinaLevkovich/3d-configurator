/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

export const Form = ({ hideForm }) => {
  return (
    <form className="order__info__form">
      <p>To place an order, fill in the following data:</p>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="E-mail" />
      <button type="button" onClick={hideForm}>checkout</button>
    </form>
  );
};

Form.propTypes = {
  hideForm: PropTypes.func.isRequired,
};
