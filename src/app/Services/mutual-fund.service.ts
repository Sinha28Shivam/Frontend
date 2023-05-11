import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MutualFundService {

  private topUrl = 'http://localhost:8090/mutualfunds/details/top?limit=5' 

  constructor(private http: HttpClient) { } 
  getData(){ 
    return this.http.get(this.topUrl); 
  }
}
