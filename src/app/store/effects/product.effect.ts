import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT
} from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, concatMap } from 'rxjs/operators';
import { DataService } from '../../core/services/data.service';

import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      concatMap(() =>
        this.ds.get().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private ds: DataService) {}
}
