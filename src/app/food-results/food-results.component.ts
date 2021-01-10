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
  viewsForWindow = 50
  foods:Array<Food>
  FoodsView:Array<Food>
  start:number
  end:number
  course = ""
  cuisine = ""
  ingredients =[]
  ingredientsDiscard = []
  maxIngredients:Number = -1
  maxTime:Number = -1
  rating:Number = 0
  isBackDisabled = true
  isNextDisabled = true

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
        this.start = 0
        this.end = this.foods.length >= this.viewsForWindow ?this.viewsForWindow : this.foods.length
        this.FoodsView = this.foods.slice(this.start,this.end)
        if(this.end < this.foods.length){
          this.isNextDisabled = false
        }
        
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
  updateFoodsView(start:number,end:number){
    this.FoodsView = this.foods.slice(this.start,this.end)
  }
  back(){
    this.start = this.start-this.viewsForWindow
    this.end = this.start + this.viewsForWindow
    this.updateFoodsView(this.start,this.end)
    if(this.start == 0){
      this.isBackDisabled = true
    }
    this.isNextDisabled = false
  }
  next(){
    this.start = this.start + this.viewsForWindow
    this.end = (this.end +this.viewsForWindow)<= this.foods.length ? this.end +this.viewsForWindow : this.foods.length
    this.updateFoodsView(this.start,this.end)
    if(this.end == this.foods.length){
      this.isNextDisabled = true
    }
    this.isBackDisabled = false
  }
  

}
