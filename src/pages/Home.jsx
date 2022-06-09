/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { SettingsMenu } from '../components/ControlMenu/Menu/SettingsMenu';
import { Header } from '../components/Header/Header';
import { Preloader } from '../components/Preloader/Preloader';
import { coloringSelector } from '../store/selectors/coloring.selector';
import image from '../assets/image/360-degrees.png';
import { Scene } from '../threejs/Scene';
import { ControlMenu } from '../components/ControlMenu/ControlMenu';
import { Footer } from '../components/Footer/Footer';

export const Home = () => {
  const [playLoading, setPlayLoading] = useState(true);
  const coloring = useSelector(coloringSelector);
  useEffect(() => {
    const onPageLoad = () => {
      setPlayLoading(false);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <>
      {playLoading ? <Preloader /> : null}
      <Header />
      <div className="main">
        <SettingsMenu />
        <img src={image} alt="360deg" className="main__image" />
        <Canvas id="rtfCanvas">
          <Scene coloring={coloring} />
        </Canvas>
        <ControlMenu />
      </div>
      <Footer />
    </>
  );
};
