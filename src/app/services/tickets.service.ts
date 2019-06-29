import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {ITickets} from '../interfaces/tickets';


@Injectable()

export class TicketsService {
  constructor(private http: HttpClient) {

  }

  getTickets(): Observable<ITickets[]> {
    return this.http.get('assets/json/tickets.json').pipe(map(data =>{
      const ticketList = data['tickets'];
      return ticketList.map(function(ticket: any)
     {
        return {
          origin_name: ticket.origin_name,
          departure_time: ticket.departure_time,
          departure_date: ticket.departure_date,
          price: ticket.price,
          stops: ticket.stops,
          arrival_time: ticket.arrival_time,
          arrival_date: ticket.arrival_date,
          destination_name: ticket.destination_name
        }
      });
    }));
  }
}
