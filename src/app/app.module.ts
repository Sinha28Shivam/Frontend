import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MutualFundService } from './Services/mutual-fund.service';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { DashboardHomeComponent } from './MyComponents/dashboard-home/dashboard-home.component';
import { ErrorPageComponent } from './MyComponents/error-page/error-page.component';
import { WalletDetailsComponent } from './MyComponents/wallet-details/wallet-details.component';
import { WalletManagementComponent } from './MyComponents/wallet-management/wallet-management.component';
import { InvestNowComponent } from './MyComponents/invest-now/invest-now.component';
import { PortfolioComponent } from './MyComponents/portfolio/portfolio.component';
import { CurrencyConversionComponent } from './MyComponents/currency-conversion/currency-conversion.component';
import { AccountDetailsComponent } from './MyComponents/account-details/account-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardHomeComponent,
    ErrorPageComponent,
    WalletDetailsComponent,
    WalletManagementComponent,
    InvestNowComponent,
    PortfolioComponent,
    CurrencyConversionComponent,
    AccountDetailsComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    MutualFundService,
    // CurrencyConversionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export class NavbarModule { }
