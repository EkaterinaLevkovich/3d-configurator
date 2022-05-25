/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Header } from '../../components/Header/Header';
import { Scene } from '../../threejs/Scene';
import { ControlMenu } from '../../components/ControlMenu/ControlMenu';
import { SettingsMenu } from '../../components/ControlMenu/Menu/SettingsMenu';
import { Preloader } from '../../components/Preloader/Preloader';
import { coloringSelector } from '../../store/selectors/coloring.selector';

const App = () => {
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
        <Canvas id="rtfCanvas">
          <Scene coloring={coloring} />
        </Canvas>
        <ControlMenu />
      </div>
    </>
  );
};

export default App;
