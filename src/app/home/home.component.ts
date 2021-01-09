import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedDataService} from '../Services/shared-data.service'
import { GetServiceService} from '../Services/get-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines :Array<string>
  ingredintName = ""
  ingredientsList = ["salt and pepper","salt", "oil","onion"]
  options = []

  constructor( private router:Router,private sharedDataService:SharedDataService,private getService:GetServiceService) { }
  
  ngOnInit(): void {
    this.getService.getCuisine()
    this.getService.onGetCuisineResponse.subscribe(
      data => this.cuisines = data.cuisines
    )
    this.getService.getIngredients()
    this.getService.onGetIngredientsResponse.subscribe(
      ingredients => this.options = this.ingredientsList = ingredients
    )
    this.getService.onUpdateCuisineResponse.subscribe(
      data => this.cuisines = data.cuisines
    )
    this.cuisines = ["asia","USA","france","dekel"]
    this.options = this.ingredientsList
    this.getService.onAppResponseError.subscribe(
      response => console.log(response)
    )
  }
  selectEvent(item) {
    this.ingredintName = item
  }
  onChangeSearch(val: string) {
    this.options = this.options.filter(value => value.toLowerCase().contain(val))
  }
  updateCuisine(): void{
    console.log(this.ingredintName)
    this.getService.getCuisineByIngredient(this.ingredintName)
  }

  onChooseCuisine(cuisine:string):void {
    this.sharedDataService.changeCuisine(cuisine)
    console.log("cuisine" + cuisine + " has been choosen")
    this.router.navigate(["ingredientChoose"])
  }


}
