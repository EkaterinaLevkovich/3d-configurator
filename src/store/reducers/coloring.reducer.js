/* eslint-disable radix */
/* eslint-disable default-param-last */
import * as THREE from 'three';
import { COLORS } from '../../constants/colors';
import { TEXTURES } from '../../constants/textures';
import {
  COLORING_BACKGROUND, COLORING_COLOR, COLORING_CUSTOM_COLOR, COLORING_TEXTURE,
} from '../actions/coloring/coloring.actions-type';

const coloring = {
  activeOption: 'armrest',
  newMTL: '#cda7a7',
  armrest: '#cda7a7',
  back: '#cda7a7',
  backCushion: '#cda7a7',
  base: '#cda7a7',
  legs: '#cda7a7',
  seatCushion: '#cda7a7',
  colorBackground: 0xf1f1f1,
};
export const coloringReducer = (state = coloring, action) => {
  const { type, payload } = action;

  switch (type) {
    case COLORING_TEXTURE: {
      const texture = TEXTURES[payload.idx];
      const txt = new THREE.TextureLoader().load(texture.texture);
      txt.repeat.set(texture.size[0], texture.size[1], texture.size[2]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;
      return {
        ...state,
        activeOption: payload.activeOption,
        newMTL: new THREE.MeshPhongMaterial({
          map: txt,
          shininess: texture.shininess ? texture.shininess : 10,
        }),
        [payload.activeOption]: texture.title,
      };
    }
    case COLORING_COLOR: return {
      ...state,
      activeOption: payload.activeOption,
      newMTL: new THREE.MeshPhongMaterial({
        color: parseInt(`0x${COLORS[payload.idx].color}`),
        shininess: 10,
      }),
      [payload.activeOption]: `#${COLORS[payload.idx].color}`, // при выборе activeOption и цвета, соответствующие свойства и значения меняются в объекте coloring
    };
    case COLORING_CUSTOM_COLOR: return {
      ...state,
      activeOption: payload.activeOption,
      newMTL: new THREE.MeshPhongMaterial({
        color: parseInt(`0x${payload.colorInputEl.slice(1)}`),
        shininess: 10,
      }),
      [payload.activeOption]: payload.colorInputEl,
    };
    case COLORING_BACKGROUND: {
      const colorValue = parseInt(`0x${payload.slice(1)}`);
      return {
        ...state,
        colorBackground: colorValue,
      };
    }
    default: return state;
  }
};
