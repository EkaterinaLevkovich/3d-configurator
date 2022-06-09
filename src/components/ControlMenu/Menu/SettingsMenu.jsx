import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { coloringBackground } from '../../../store/actions/coloring/coloring.actions';

export const SettingsMenu = () => {
  const dispatch = useDispatch();
  const getColorBackground = (event) => {
    dispatch(coloringBackground(event.target.value));
  };
  const [clickedOutside, setClickedOutside] = useState(true);
  const buttonRef = useRef();
  const handleClickOutside = (event) => {
    if (!buttonRef.current.contains(event.target)) {
      setClickedOutside(true);
    }
  };
  const handleClickInside = () => {
    setClickedOutside(!clickedOutside);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  return (
    <div className="settingsMenu">
      <input type="color" onChange={getColorBackground} defaultValue="#f1f1f1" />
      <button type="button" ref={buttonRef} onClick={handleClickInside}>i</button>
      <div className="settingsMenu__infoCard" style={{ display: clickedOutside ? 'none' : 'inline' }}>
        <p>Length: 201 cm</p>
        <p>Height: 84 cm</p>
        <p>Depth: 76 cm</p>
        <p>Frame material: wood</p>
        <p>Triple sofa</p>
      </div>
    </div>
  );
};
