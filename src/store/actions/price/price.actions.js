import { COLOR_PRICE, TEXTURE_PRICE } from './price.actions-type';

export const texturePrice = (idx, activeOption) => ({ type: TEXTURE_PRICE, payload: { idx, activeOption } });
export const colorPrice = (activeOption) => ({ type: COLOR_PRICE, payload: activeOption });
