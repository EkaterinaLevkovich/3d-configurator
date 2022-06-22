/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Order } from '../../pages/Order';

const App = () => {
  useEffect(() => {
    document.title = '3d-configurator';
  }, []);
  return (
    <Routes>
      <Route path="/3d-configurator/" element={<Home />} />
      <Route path="/3d-configurator/order/" element={<Order />} />
    </Routes>
  );
};

export default App;
