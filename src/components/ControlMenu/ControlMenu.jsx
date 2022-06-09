/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { ColorMenu } from './Menu/ColorMenu';
import { OptionMenu } from './Menu/OptionMenu';
import { TextureMenu } from './Menu/TextureMenu';

export const ControlMenu = () => {
  const [activeOption, setActiveOption] = useState('armrest');
  return (
    <div className="controlMenu">
      <h2>Choose <span>finishing</span></h2>
      <p>Options</p>
      <OptionMenu activeOption={activeOption} setActiveOption={setActiveOption} />
      <p>Textures</p>
      <TextureMenu activeOption={activeOption} />
      <p>Colors</p>
      <ColorMenu activeOption={activeOption} />
    </div>
  );
};
