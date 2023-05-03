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
  // 'use strict';
  // var request = require('request');
  
  // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
  // var url = 'https://www.alphavantage.co/query?function=EARNINGS&sym-bol=IBM&apikey=YE7GP1ZVOU0DBFQF';
  
  // request.get({
  //     url: url,
  //     json: true,
  //     headers: {'User-Agent': 'request'}
  //   }, (err: any, res: { statusCode: number; }, data: any) => {
  //     if (err) {
  //       console.log('Error:', err);
  //     } else if (res.statusCode !== 200) {
  //       console.log('Status:', res.statusCode);
  //     } else {
  //       // data is successfully parsed as a JSON object:
  //       console.log(data);
  //     }
  // });

}



// currency conversion api key:  YE7GP1ZVOU0DBFQF