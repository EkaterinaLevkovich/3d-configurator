/* eslint-disable arrow-body-style */
import { Footer } from '../components/Footer/Footer';
import { HeaderOrder } from '../components/Header/HeaderOrder';
import { Info } from '../components/Info/Info';

export const Order = () => {
  return (
    <>
      <HeaderOrder />
      <div className="order">
        <p>
          ORDERING
          <br />
          &mdash;
        </p>
        <div className="order__border" />
        <Info />
      </div>
      <Footer />
    </>
  );
};

