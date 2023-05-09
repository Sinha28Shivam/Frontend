import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fas, fab);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import { DashboardHomeComponent } from './MyComponents/dashboard-home/dashboard-home.component';
import { ErrorPageComponent } from './MyComponents/error-page/error-page.component';
import { WalletDetailsComponent } from './MyComponents/wallet-details/wallet-details.component';
import { WalletManagementComponent } from './MyComponents/wallet-management/wallet-management.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardHomeComponent,
    ErrorPageComponent,
    WalletDetailsComponent,
    WalletManagementComponent,

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
