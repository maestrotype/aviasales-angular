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
          name: ticket.origin_name,
          price: ticket.price,
          stops: ticket.stops
        }
      });
    }));
  }
}
