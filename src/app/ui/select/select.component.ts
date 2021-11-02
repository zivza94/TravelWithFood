import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

type T = any;
// tslint:disable-next-line: no-shadowed-variable
export interface Chip<T> {
  data: T;
  title: string;
}

@Component({
  selector: 'pt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input()
  chips: Array<Chip<T>> = [];

  selectedChip?: Chip<T>;

  @Input()
  placeholder = 'Search...';

  @Input()
  onAdd?: (chip: Chip<T>, chips: Chip<T>[]) => Chip<T>[];

  @Output()
  messageEvent = new EventEmitter<string>();

  public showList = false;

  constructor() {}

  ngOnInit(): void {}

  onAddInternal(chip: Chip<T>, $event: any) {
    this.selectedChip = chip;
    this.placeholder = chip.title;
    this.messageEvent.emit();
  }

  getSelectedChip() {
    return this.selectedChip;
  }

  clearSelectedChip() {
    this.selectedChip = undefined;
    this.placeholder = 'Search...';
  }

  onClick() {
    if (this.showList === true) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    this.showList = true;
  }

  hide() {
    this.showList = false;
  }

  onFocusOut() {
    this.hide();
  }
}
