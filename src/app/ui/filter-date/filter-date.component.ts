import { Component, OnInit } from '@angular/core';
// import moment from 'moment';

@Component({
  selector: 'pt-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
  public from = '';
  public to = '';

  constructor() {}

  ngOnInit(): void {}

  clearSelectedDates() {
    this.from = '';
    this.to = '';
  }

  getDate() {
    // return moment(this.date).format('YYYY-MM-DD');
    return [this.from, this.to];
  }
}
