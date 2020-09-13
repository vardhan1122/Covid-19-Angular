import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor( private httpClient: HttpClient ) { }

  // get all covid-india data
  public getCovidIndia(): Observable<any>{
    const dataURL = `https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // get all covid-world data
  public getCovidWorld(): Observable<any>{
    const dataURL = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

   // get all covid-home data
   public getCovidWorldTotal(): Observable<any>{
    const dataURL1 = `https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true`;
    return this.httpClient.get<any>(dataURL1).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  // if not fetch any data,showing error
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';

    if(error.error instanceof ErrorEvent){
      // client side error
      errorMessage = error.error.message;
    }
    else{
      // server error
      errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
