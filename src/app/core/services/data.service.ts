import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  get(): Observable<Product[]> {
    return this.http.get<{ products }>('/assets/db.json').pipe(
      map(({ products }) => products)
    )
  }
}
