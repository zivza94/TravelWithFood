import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Food} from '../DTO/food'
import { GetServiceService } from '../Services/get-service.service';
import { SharedDataService } from '../Services/shared-data.service';
@Component({
  selector: 'app-food-results',
  templateUrl: './food-results.component.html',
  styleUrls: ['./food-results.component.css']
})
export class FoodResultsComponent implements OnInit {
  foods:Array<Food>
  AllFoods:Array<Food>
  course = ""
  cuisine = ""
  ingredients =[]
  ingredientsDiscard = []
  maxIngredients:Number = -1
  maxTime:Number = -1
  rating:Number = 0

  constructor(private sharedDataService:SharedDataService,private getService:GetServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getFoodList()
  }

  getFoodList(){
    this.sharedDataService.currentCourse.subscribe(
      course => this.course = course
    )
    this.sharedDataService.currentCuisine.subscribe(
      cuisine => this.cuisine = cuisine
    )
    this.sharedDataService.currentIngredients.subscribe(
      ingredients => this.ingredients = ingredients
    )
    this.sharedDataService.currentIngredientsDiscard.subscribe(
      ingredientsDiscard => this.ingredientsDiscard = ingredientsDiscard
    )
    this.sharedDataService.currentMaxIngredient.subscribe(
      maxIng => this.maxIngredients = maxIng
    )
    this.sharedDataService.currentMaxTime.subscribe(
      maxTime => this.maxTime = maxTime
    )
    this.sharedDataService.currentRating.subscribe(
      rating => this.rating = rating
    )
    
    this.getService.onGetFoods.subscribe(
      foods => {
        this.foods = foods
        this.AllFoods = this.foods.slice(0,this.foods.length >= 50 ?50 : this.foods.length)
      }
    )
    this.getService.getFoods(this.cuisine,this.ingredients,this.ingredientsDiscard,this.course,this.maxTime,this.rating,this.maxIngredients)
  }

  getdetails(food:Food){
    var details = ""
    details += "courses: " +food.courses + "<br>"
    details += "cousines: " + food.cuisines + "<br>"
    details += "num of ingredients :" + food.ingredients.length + "<br>"
    details += + "<br>"
    return details
  }
  getTime(totalTime){
    return  "Time: " + Math.floor(totalTime/60) + " h " + Math.floor(totalTime%60) + " m"
  }

  selectFood(food:Food){
    this.sharedDataService.changeFood(food)
    this.router.navigate(["food"])
  }

}
