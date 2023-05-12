import { Component } from '@angular/core';
import { MutualFundService } from 'src/app/Services/mutual-fund.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  flag:any; 
  error:any; 
  constructor(private mutualfund: MutualFundService){ 
    console.log('Constructor Called'); 
    this.mutualfund.getData().subscribe(data => { 
      this.flag=data; 
      console.log(data) 

    },
      (error)=>
      { 
        console.error('Error 404 Not Found'); this.error=error; }) 
      
      }
}
