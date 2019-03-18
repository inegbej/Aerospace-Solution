import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private _rateUrl = 'https://ratesapi.io/api/latest?base=';

  constructor(private httpClient: HttpClient) { }

  getCurrency(fromValue: string, toValue: string): Observable<Currency> {
     return this.httpClient.get<Currency>( this._rateUrl + fromValue + '&symbols=' + toValue);
  }

}
