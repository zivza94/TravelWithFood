import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-cooking-goals',
  templateUrl: './cooking-goals.component.html',
  styleUrls: ['./cooking-goals.component.css']
})
export class CookingGoalsComponent implements OnInit {
  @ViewChild('next') nextBtn
  maxTime = 0
  min = 0
  hours = 0
  rating = 0
  course = ""
  maxIngredient = 0
  courses =["dinner","lunch","wine"]
  options = []
  selectedIngredients = []
  errorMessage = ""
  isDisabled = false
  //course:FormControl
  constructor(private sharedDataService:SharedDataService,private router:Router) { }

  ngOnInit(): void {
    this.options = this.courses
    this.sharedDataService.currentIngredients.subscribe(
      ingredients => this.selectedIngredients = ingredients
    )
  }

  onKey(event,value:string){
    switch (value){
      case "min":{
         this.min = +event.target.value 
         break}
      case "hr":{ 
        this.hours = +event.target.value
        break
      }
      case "rating":{
         this.rating = +event.target.value
         break
      }
      case "ingredient": {
        var max = +event.target.value
        var min = this.selectedIngredients.length
        if (max > min || max == 0){
          this.maxIngredient = +event.target.value
          this.errorMessage = ""
          this.isDisabled = false
        } else {
          this.errorMessage = " You choose "+ min +" min ingredients, please enter greater number or empty"
          this.isDisabled = true
        }
          
        break
      }
      default: console.log("nothing to update")
    }
  }

  selectEvent(item) {
    this.course = item
  }

  onChangeSearch(val: string) {
    this.options = this.options.filter(value => value.toLowerCase().contain(val))
  }
  

  next(){
      this.maxTime = this.hours * 60 + this.min
      this.sharedDataService.changeMaxIngredient(this.maxIngredient)
      this.sharedDataService.changeMaxTime(this.maxTime)
      this.sharedDataService.changeCourse(this.course)
      this.sharedDataService.changeRating(this.rating)
      this.router.navigate(["foods"])
    
  }

  back(){
    this.router.navigate(["ingredientChoose"])
  }

}
