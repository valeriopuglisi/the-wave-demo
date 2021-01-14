import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models/product';
import { Compare } from '../models/compare';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  

  private getroductsUrl = '/api/all';
  private postProductUrl = '/api/add';
  private postCompareUrl = '/api/compare';

  constructor(private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        // this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** GET: add a new product to the database */
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.getroductsUrl).pipe(
        catchError(this.handleError<Product[]>('all', []))
      );
    }

    /** POST: add a new product to the database */
    addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.postProductUrl, product, httpOptions)
        .pipe(
          catchError(this.handleError('addProduct', product))
        );
    }

    /** POST: add a new product to the database */
    addCompare(compare: Compare): Observable<Compare> {
      return this.http.post<Compare>(this.postCompareUrl, compare, httpOptions)
        .pipe(
          catchError(this.handleError('addCompare', compare))
        );
    }

    
}
