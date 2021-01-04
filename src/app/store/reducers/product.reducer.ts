import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as ProductActions from '../actions/product.actions';

import { Product } from '../../core/interfaces/Product';
import { SortDescending } from '../../core/utils/sort';
import { SortBy } from '../../core/types/Sort';

// Base model
export interface State extends EntityState<Product> {
  selectedProductId: string | null;
  loading: boolean;
  loaded: boolean;
  sortBy: SortBy;
}

// Get selected product ID
export function selectProductId(p: Product): string {
  return p.productId;
}

// Default sort by
export function sortPriceDesc(a: Product, b: Product): number {
  return SortDescending(a.price, b.price);
}

// Generate adapter
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId,
  sortComparer: sortPriceDesc
});

// Initial state
export const initialState: State = adapter.getInitialState({
  selectedProductId: null,
  sortBy: 'priceDesc',
  loading: true,
  loaded: false
});

const productReducer = createReducer(
  // Initial state
  initialState,
  // Successful load
  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    const updatedState = { ...state, loaded: true, loading: false };
    return adapter.setAll(products, updatedState);
  }),
  // Select product
  on(ProductActions.selectProduct, (state, { productId }) => {
    return { ...state, selectedProductId: productId };
  }),
  // Deselect product
  on(ProductActions.deselectProduct, (state) => {
    return { ...state, selectedProductId: null };
  }),
  // Change sort
  on(ProductActions.sortBy, (state, { sortBy }) => {
    return { ...state, sortBy };
  })
);

export function reducer(state: State | undefined, action: Action): State {
  return productReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
// Selector helpers
export const selectProductIds = selectIds;
export const selectProductEntities = selectEntities;
export const selectAllProducts = selectAll;
export const selectProductTotal = selectTotal;
