import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyConversionService } from 'src/app/Services/currency-conversion.service';


@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent {
  flag:any; 
  error:any; 
  constructor(private currencyconversion: CurrencyConversionService){ 
    console.log('Constructor Called'); 
    // this.ngOnInit 
    this.currencyconversion.getData().subscribe(data => { 
      this.flag=data; 
      console.log(data) 
      // console.log('Init Called') 
    },
      (error)=>
      { 
        // console.error(error); 
        console.error('Error 404 Not Found'); this.error=error; }) 
      
      } 
}