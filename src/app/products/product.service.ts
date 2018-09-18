import {IProduct} from './product';
import {HttpErrorResponse} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productURL = "http://localhost:/8080/";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productURL).pipe(
      tap(data => console.log('All : ' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  //method created to handle Error
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Server returned the error code ${err.status} and message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  //    return [
  //      {
  //        "productId": 2,
  //        "productName": "Garden Cart",
  //        "productCode": "GDN-0023",
  //        "releaseDate": "March 18,2016",
  //        "description": "15 gallon capacity",
  //        "price": 32.99,
  //        "starRating": 4.2,
  //        "imageURL": "https://via.placeholder.com/350x150"
  //      },
  //      {
  //        "productId": 3,
  //        "productName": "Lawn Cart",
  //        "productCode": "LWN-0023",
  //        "releaseDate": "January 18,2016",
  //        "description": "10 gallon capacity",
  //        "price": 22.99,
  //        "starRating": 3.2,
  //        "imageURL": "https://via.placeholder.com/350x150"
  //      }
  //    ];
}