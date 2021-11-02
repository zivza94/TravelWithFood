import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

type T = any;
// tslint:disable-next-line: no-shadowed-variable
interface Chip<T> {
  data: T;
  title: string;
}
@Component({
  selector: 'pt-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  @Input()
  left = '';

  @Input()
  right = '';

  @Input()
  path = '';

  @Input()
  svg = '';

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    if (this.path === 'clear') {
      this.messageEvent.emit();
    } else {
      // navigate to the given page name
      this.router.navigate(['/' + this.path]);
    }
  }
}
