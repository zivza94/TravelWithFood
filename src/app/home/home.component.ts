import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cuisines :Array<string>
  ngOnInit(): void {
    this.cuisines = ["asia","USA","france","dekel"]
  }


}
