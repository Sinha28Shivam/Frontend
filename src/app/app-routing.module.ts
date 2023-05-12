import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ErrorPageComponent } from './MyComponents/error-page/error-page.component';
import { WalletDetailsComponent } from './MyComponents/wallet-details/wallet-details.component';
import { WalletManagementComponent } from './MyComponents/wallet-management/wallet-management.component';
import { DashboardHomeComponent } from './MyComponents/dashboard-home/dashboard-home.component';
import { InvestNowComponent } from './MyComponents/invest-now/invest-now.component';
import { PortfolioComponent } from './MyComponents/portfolio/portfolio.component';
// import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { AccountDetailsComponent } from './MyComponents/account-details/account-details.component';

const routes: Routes = [
  // {path: 'error', component: ErrorPageComponent},
  {path:'', component: DashboardHomeComponent},
  {path: 'wallet-details', component: WalletDetailsComponent},
  {path: 'wallet-management', component: WalletManagementComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'InvestNow', component: InvestNowComponent},
  {path: 'account-details', component: AccountDetailsComponent}
  // {path: '**', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
