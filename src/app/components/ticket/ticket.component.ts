import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets.service';
import { ITickets } from '../../interfaces/tickets';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [TicketsService]
})
export class TicketComponent implements OnInit {
  // API = 'http://www.json-generator.com/api/json/get/cqGducpwHS?indent=2';
  public tickets: ITickets[];

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTickets().subscribe( data => {
      console.log('tickets1', data);
      this.tickets = data;
      console.log('tickets2', this.tickets);
    } );
    console.log('tickets3', this.tickets);
  }

  changeCur(currency) {
    return currency === 'RUB' ? '₽' : currency === 'USD' ? `<span>&#36;</span>` : `<span>&euro;</span>`;
  }

  transformSum(price) {
    var trPrice = price.toString();
    if (trPrice.length > 3) {
      for (let i = trPrice.length; trPrice >= 0  ; i--) {
        if (i % 3 == 0) {
          var ar = trPrice.split('');
          ar.splice(trPrice.length - i, 0, ' ');
          trPrice = ar.join('');
        }
      }
    }

    return trPrice
  }

  calcCur(currency, price) {
    switch (currency) {
      case 'RUB': {
        return this.transformSum(price)
      }
      case 'USD': {
        return (price * 0.016).toFixed(1)
      }
      case 'EUR': {
        return (price * 0.014).toFixed(1)
      }
      default: {
        return price
      }
    }
  }

}
