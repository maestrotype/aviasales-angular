import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {ITickets} from '../interfaces/tickets';
import ticketsJSON from './tickets.json';


@Injectable()

export class TicketsService {
  constructor(private http: HttpClient) {

  }

  getTickets(): Observable<ITickets[]> {
    console.log('ticketsJSON', ticketsJSON);
    return this.http.get('http://www.json-generator.com/api/json/get/cqGducpwHS?indent=2').pipe(map(data =>{
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
