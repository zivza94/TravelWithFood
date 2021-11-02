import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '../ui/check-box/check-box.component';
import { FilterDateComponent } from '../ui/filter-date/filter-date.component';
import { FilterDestinationComponent } from '../ui/filter-destination/filter-destination.component';
import { FilterFromComponent } from '../ui/filter-from/filter-from.component';
import { FilterQuantityComponent } from '../ui/filter-quantity/filter-quantity.component';
import { TextInputComponent } from '../ui/text-input/text-input.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(FilterFromComponent) from: any;
  @ViewChild(FilterDestinationComponent) to: any;
  @ViewChild(FilterDateComponent) dates: any;
  @ViewChild(TextInputComponent) duration: any;
  @ViewChild(FilterQuantityComponent) quantity: any;
  @ViewChild(CheckBoxComponent) direct: any;

  ngOnInit() {}

  filterForm() {
    console.log(
      this.from.getSelectedDest(),
      this.to.getSelectedDest(),
      this.dates.getDate(),
      this.duration.getValue(),
      this.quantity.getSelectedQuantity()
    );
  }
}
