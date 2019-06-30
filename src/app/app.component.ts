import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aviasales-angular';
  curSymb: string;
  currency: string;

  changeCur(currency) {
    console.log('currency', currency);
    this.currency = currency;
    this.curSymb = currency === 'RUB' ? '₽' : currency === 'USD' ? '$' : '€';
    console.log('curParent', this.curSymb);
  }
}
