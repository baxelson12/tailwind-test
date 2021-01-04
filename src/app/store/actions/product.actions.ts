import { createAction, props } from '@ngrx/store';

import { SortBy } from '../../core/types/Sort';
import { Product } from '../../core/interfaces/Product';

// Get products from DB
export const LOAD_PRODUCTS = '[Products] Load products.';
export const LOAD_PRODUCTS_FAIL = '[Products] Load products failed.';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load products success.';

export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsFail = createAction(LOAD_PRODUCTS_FAIL);
export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
);

// Select/deselct product in UI
export const SELECT_PRODUCT = '[Products] Select product.';
export const DESELECT_PRODUCT = '[Products] Deselect product.';
export const selectProduct = createAction(
  SELECT_PRODUCT,
  props<{ productId: string }>()
);
export const deselectProduct = createAction(DESELECT_PRODUCT);

// Change sortBy

export const SORT_BY = '[Products] Change sort.';
export const sortBy = createAction(SORT_BY, props<{ sortBy: SortBy }>());

// Actions
export const actions = [
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  selectProduct,
  deselectProduct,
  sortBy
];
