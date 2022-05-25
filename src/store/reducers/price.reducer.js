/* eslint-disable default-param-last */
import { TEXTURES } from '../../constants/textures';
import { COLOR_PRICE, TEXTURE_PRICE } from '../actions/price/price.actions-type';

const price = {
  startingPrice: 330,
  armrest: 0,
  back: 0,
  backCushion: 0,
  base: 0,
  legs: 0,
  seatCushion: 0,
};
export const priceReducer = (state = price, action) => {
  const { type, payload } = action;

  switch (type) {
    case TEXTURE_PRICE: {
      const texture = TEXTURES[payload.idx];
      let priceTexture;
      if (texture.title === 'wood') {
        priceTexture = 3;
      } else if (texture.title === 'leather' || texture.title === 'jeans') {
        priceTexture = 14;
      } else {
        priceTexture = 10;
      }
      return {
        ...state,
        [payload.activeOption]: priceTexture,
      };
    }
    case COLOR_PRICE: return {
      ...state,
      [payload.activeOption]: 5,
    };
    default: return state;
  }
};
