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
  private tickets: ITickets[];

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.ticketsService.getTickets().subscribe( data => {
      console.log('tickets1', data);
      this.tickets = data;
      console.log('tickets2', this.tickets);
    } );
    console.log('tickets3', this.tickets);
  }

}
