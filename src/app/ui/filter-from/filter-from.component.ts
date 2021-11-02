import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SelectComponent } from '../select/select.component';
import { Chip } from '../select/select.component';

@Component({
  selector: 'pt-filter-from',
  templateUrl: './filter-from.component.html',
  styleUrls: ['./filter-from.component.scss'],
})
export class FilterFromComponent implements OnInit {
  @ViewChild(SelectComponent) child: any;
  public days: Array<Chip<number>> = [];
  constructor() {}

  ngOnInit(): void {
    this.getDestList();
  }

  getDestList() {
    this.days = [
      { title: 'CDG', data: 1 },
      { title: 'TLV', data: 2 },
      { title: 'EWR', data: 3 },
      { title: 'JFK', data: 4 },
      { title: 'BKK', data: 5 },
      { title: 'VIE', data: 6 },
      { title: 'FCO', data: 7 },
    ];
  }

  clearSelectedDest() {
    this.child.clearSelectedChip();
  }

  getSelectedDest(): Array<number> {
    return this.child.getSelectedChip();
  }
}
