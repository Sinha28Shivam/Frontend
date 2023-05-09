import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './MyComponents/error-page/error-page.component';
import { WalletDetailsComponent } from './MyComponents/wallet-details/wallet-details.component';
import { WalletManagementComponent } from './MyComponents/wallet-management/wallet-management.component';
import { DashboardHomeComponent } from './MyComponents/dashboard-home/dashboard-home.component';

// import { NavbarComponent } from './MyComponents/navbar/navbar.component';

const routes: Routes = [
  // {path: 'error', component: ErrorPageComponent},
  {path:'',component:DashboardHomeComponent},
  {path: 'wallet-details', component: WalletDetailsComponent},
  {path: '**', component: ErrorPageComponent},
  {path: 'WalletManagement', component: WalletManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
