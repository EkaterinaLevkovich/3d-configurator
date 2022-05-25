import { useState } from 'react';
import { ColorMenu } from './Menu/ColorMenu';
import { OptionMenu } from './Menu/OptionMenu';
import { TextureMenu } from './Menu/TextureMenu';

export const ControlMenu = () => {
  const [activeOption, setActiveOption] = useState('armrest');
  return (
    <div className="controlMenu">
      <h2>Choose finishing</h2>
      <p>Option</p>
      <OptionMenu activeOption={activeOption} setActiveOption={setActiveOption} />
      <p>Textures</p>
      <TextureMenu activeOption={activeOption} />
      <p>Colors</p>
      <ColorMenu activeOption={activeOption} />
    </div>
  );
};
