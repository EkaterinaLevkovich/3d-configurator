import {
  COLORING_BACKGROUND, COLORING_COLOR, COLORING_CUSTOM_COLOR, COLORING_TEXTURE,
} from './coloring.actions-type';

export const coloringTexture = (idx, activeOption) => ({ type: COLORING_TEXTURE, payload: { idx, activeOption } });
export const coloringColor = (idx, activeOption) => ({ type: COLORING_COLOR, payload: { idx, activeOption } });
export const coloringCustomColor = (colorInputEl, activeOption) => ({ type: COLORING_CUSTOM_COLOR, payload: { colorInputEl, activeOption } });
export const coloringBackground = (colorInputEl) => ({ type: COLORING_BACKGROUND, payload: colorInputEl });
