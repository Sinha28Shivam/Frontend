import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  curr() {
    throw new Error('Method not implemented.');
  }
url="https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=YE7GP1ZVOU0DBFQF"
  constructor(private http:HttpClient) { }
  currency()
  {
    return this.http.get(this.url);
    
  }
}
