/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Order } from '../../pages/Order';

const App = () => {
  return (
    <Routes>
      <Route path="/react-gh-pages" element={<Home />} />
      <Route path="/react-gh-pages/order" element={<Order />} />
    </Routes>
  );
};

export default App;
