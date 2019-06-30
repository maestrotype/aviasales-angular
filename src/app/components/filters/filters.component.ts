import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() activeCurrency = new EventEmitter<string>();

  public curMenu = [
    'RUB',
    'USD',
    'EUR'
  ];

  public stops = [
    {
      stop: 'Все',
      id: 'all',
      active: true
    },
    {
      stop: 'Без пересадок',
      id: '0',
      active: false
    },
    {
      stop: '1 пересадка',
      id: '1',
      active: false
    },
    {
      stop: '2 пересадки',
      id: '2',
      active: false
    },
    {
      stop: '3 пересадки',
      id: '3',
      active: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeCur(e) {
    console.log('target', e.target);

    // e.target.addClass('active');
    this.activeCurrency.emit(e.target.innerText);
  }

}
