import { combineReducers } from 'redux';
import { coloringReducer } from './coloring.reducer';
import { priceReducer } from './price.reducer';

export const reducers = combineReducers({
  price: priceReducer,
  coloring: coloringReducer,
});
