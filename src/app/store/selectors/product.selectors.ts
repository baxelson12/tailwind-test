import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SortAscending, SortDescending } from '../../core/utils/sort';

import * as FromReducer from '../reducers/product.reducer';

// Get slice
export const selectProductState = createFeatureSelector<FromReducer.State>(
  'products'
);

// All products array
export const selectAllProducts = createSelector(
  selectProductState,
  FromReducer.selectAllProducts
);

// All products count
export const selectProductTotal = createSelector(
  selectProductState,
  FromReducer.selectProductTotal
);

// All product entities
export const selectProductEntities = createSelector(
  selectProductState,
  FromReducer.selectProductEntities
);

// Selected product ID
// TODO: Return selected product outright
export const selectedProductId = createSelector(
  selectProductState,
  (state: FromReducer.State) => state.selectedProductId
);