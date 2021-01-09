import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-ingredients-choose',
  templateUrl: './ingredients-choose.component.html',
  styleUrls: ['./ingredients-choose.component.css']
})
export class IngredientsChooseComponent implements OnInit {
  //ingredintNameAdd = ""
  //ingredintNameRemove = ""
  @ViewChild('toAdd') toAdd:ElementRef
  @ViewChild('toRemove') toRemove:ElementRef
  ingredientName
  ingredientList = new Array<string>() 
  ingredientListRemove = new Array<string>()
  options = []
  ingredients = ["salt","pepper","onion","oil","macha"] 
  cuisine:string

  constructor(private router:Router,private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentCuisine.subscribe( cuisine => this.cuisine=cuisine)
    this.options = this.ingredients
  }
  /*selectEvent(item) {
    this.ingredintName = item
  }*/
  onChangeSearch(val: string) {
    this.options = this.options.filter(value => value.toLowerCase().contain(val))
  }
  onKey(event) {
    this.ingredientName = event.target.value
  }
  onAdd(want:boolean){
    if (want){
      this.ingredientList.push(this.ingredientName)
      this.toAdd.nativeElement.value = ""
      
    } else {
      this.ingredientListRemove.push(this.ingredientName)
      this.toRemove.nativeElement.value = ""
    } 
  }

  next(){
    this.sharedDataService.changeIngredients(this.ingredientList)
    this.sharedDataService.changeIngredientsDiscard(this.ingredientListRemove)
    this.router.navigate(["requirments"])
  }

  back(){
    this.router.navigate(["home"])
  }


}
