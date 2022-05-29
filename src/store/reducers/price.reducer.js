/* eslint-disable default-param-last */
import { TEXTURES } from '../../constants/textures';
import { COLOR_PRICE, CUSTOM_COLOR_PRICE, TEXTURE_PRICE } from '../actions/price/price.actions-type';

const price = {
  startingPrice: 340,
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
      return {
        ...state,
        [payload.activeOption]: texture.price,
      };
    }
    case COLOR_PRICE: return {
      ...state,
      [payload]: 5,
    };
    case CUSTOM_COLOR_PRICE: return {
      ...state,
      [payload]: 7,
    };
    default: return state;
  }
};
