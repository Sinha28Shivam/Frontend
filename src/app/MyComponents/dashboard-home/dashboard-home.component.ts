import { Component } from '@angular/core';
import { MutualFundService } from 'src/app/Services/mutual-fund.service';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  flag:any; 
  error:any; 
  constructor(private mutualfund: MutualFundService){ 
    console.log('Constructor Called'); 
    // this.ngOnInit 
    this.mutualfund.getData().subscribe(data => { 
      this.flag=data; 
      console.log(data) 
      // console.log('Init Called') 
    },
      (error)=>
      { 
        // console.error(error); 
        console.error('Error 404 Not Found'); this.error=error; }) 
      
      }

      PurchasePrice: number = 10;
      units: number = 10;
      totalValue: number=0;
      
      calculateTotalValue() {
      this.totalValue = this.PurchasePrice * this.units;
      }

}
