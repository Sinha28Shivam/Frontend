import { Component } from '@angular/core';
import { CurrencyConversionService } from './Services/currency-conversion.service';
// import * as request from 'request';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Frontend';
  curr:any;
  constructor(private dataService: CurrencyConversionService)
  {
    this.dataService.curr().subscribe((data: any)=>{
      console.warn("data", data);
      this.curr=data
      
    })
  }

  
}



// currency conversion api key:  YE7GP1ZVOU0DBFQF
//  url = 'https://www.alphavantage.co/query?function=EARNINGS&sym-bol=IBM&apikey=YE7GP1ZVOU0DBFQF';