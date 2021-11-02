import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'pt-filter-quantity',
  templateUrl: './filter-quantity.component.html',
  styleUrls: ['./filter-quantity.component.scss'],
})
export class FilterQuantityComponent implements OnInit {
  @Input()
  title = '';

  @ViewChild(SelectComponent) child: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getQuantitiesList() {
    return [
      { title: '1', data: '1' },
      { title: '2', data: '2' },
      { title: '3', data: '3' },
      { title: '4', data: '4' },
      { title: '5', data: '5' },
    ];
  }

  clearSelectedQuantity() {
    this.child.clearSelectedChip();
  }

  getSelectedQuantity() {
    return this.child.getSelectedChip();
  }
}
