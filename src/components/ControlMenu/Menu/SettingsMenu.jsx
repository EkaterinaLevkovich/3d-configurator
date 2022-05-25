import { useDispatch } from 'react-redux';
import { coloringBackground } from '../../../store/actions/coloring/coloring.actions';

export const SettingsMenu = () => {
  const dispatch = useDispatch();
  const handleBackground = (event) => {
    dispatch(coloringBackground(event.target.value));
  };
  return (
    <div className="settingsMenu">
      <input type="color" onChange={handleBackground} defaultValue="#f1f1f1" />
      <button type="button">i</button>
    </div>
  );
};
