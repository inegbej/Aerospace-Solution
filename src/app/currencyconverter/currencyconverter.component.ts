import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../shared/currency.service';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.scss']
})
export class CurrencyconverterComponent implements OnInit {

  fromCurrentCurrency: string;
  toNewCurrency: string;
  amount: any;
  convertedAmount: number;

  constructor(private currencyService: CurrencyService) { }

  conversions = [
    {
      id: 1.2329,
      name: 'CAD'
    },
    {
      id: 0.9326,
      name: 'CHF'
    },
    {
      id: 0.6432,
      name: 'GBP'
    },
    {
      id: 1,
      name: 'USD'
    },
    {
      id: 123.454,
      name: 'JPY'
    }
  ];

  ngOnInit() {
    this.fromCurrentCurrency = 'GBP';
    this.toNewCurrency = 'USD';
  }

  convertFromCurrentCurrency(id: number, name: string) {
    this.fromCurrentCurrency = name;
  }

  convertToNewCurrency(id: number, name: string) {
    this.toNewCurrency = name;
  }

  convertCurrency() {
    this.currencyService.getCurrency(this.fromCurrentCurrency, this.toNewCurrency).subscribe(response => {
      if (this.toNewCurrency === 'CAD') {
        this.convertedCurrency(response.rates.CAD);
      } else if (this.toNewCurrency === 'CHF') {
        this.convertedCurrency(response.rates.CHF);
      } else if (this.toNewCurrency === 'GBP') {
        this.convertedCurrency(response.rates.GBP);
      } else if (this.toNewCurrency === 'USD') {
        this.convertedCurrency(response.rates.USD);
      } else {
        this.convertedCurrency(response.rates.JPY);
      }
    });
  }

  convertedCurrency(response: any) {
    if (response === undefined) {
      response = 1;
    }
    this.convertedAmount = this.amount * response;
  }

}
