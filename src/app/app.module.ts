import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { RouterModule } from '@angular/router';
import { CconverterModule } from './currencyconverter/cconverter.module';
import { CurrencyService } from './shared/currency.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyconverterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'currencyconverter', component: CurrencyconverterComponent },
      { path: '', redirectTo: 'currencyconverter', pathMatch: 'full' },
      { path: '**', redirectTo: 'currencyconverter', pathMatch: 'full' }
    ]),
    CconverterModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
