import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private topUrl = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=AUD&to_currency=EUR&apikey=OUZFAR0DURZXF9T2' 

  constructor(private http: HttpClient) { } 
  getData(){ 
    return this.http.get(this.topUrl); 
  }
}
