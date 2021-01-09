import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Food } from '../DTO/food';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  ResponseSubjects: {[responseID:string]:Subject<any>} = {
    GetCuisine : new Subject<any>(),
    GetIngredients: new Subject<any>(),
    UpdateCuisine:new Subject<any>(),
    GetFoods:new Subject<any>(),
    AppResponseError:new Subject<any>()

  }
  constructor(private httpClient:HttpClient) { }

  get onGetCuisineResponse(){
    return this.ResponseSubjects.GetCuisine
  }
  get onGetIngredientsResponse(){
    return this.ResponseSubjects.GetIngredients
  }
  get onUpdateCuisineResponse(){
    return this.ResponseSubjects.UpdateCuisine
  }
  get onGetFoods(){
    return this.ResponseSubjects.GetFoods
  }
  get onAppResponseError(){
    return this.ResponseSubjects.AppResponseError
  }
  getCuisine(){
    this.httpClient.post("api/Main/GetAllCuisines",{}).subscribe(
      data => this.ResponseSubjects["GetCuisine"].next(data)
      )
  }
  getIngredients(){
    this.httpClient.post("api/Main/GetIngredients",{}).subscribe(
      data => this.ResponseSubjects["GetIngredients"].next(data)
    )
  }
  getCuisineByIngredient(ingredient:string){
    var request = { "Ingredient": ingredient}
    this.httpClient.post("api/Main/GetCuisineByIngredient",request).subscribe(
      data => this.ResponseSubjects["UpdateCuisine"].next(data)
    )
  }
  getFoods(cuisine:string,ingredients:Array<string>,discardIngredients:Array<string>,course:string,maxTime:Number,rating:Number,maxIngredient:Number){
    /*var request = {
      "Cuisine": cuisine,
      "Ingredients": ingredients,
      "WithoutIngredients":discardIngredients,
      "Course":course,
      "MaxTime":maxTime,
      "Rating":rating,
      "MaxIngredients":maxIngredient
    }
    this.httpClient.post("api/Main/GetFoods",request).subscribe(
      data => this.ResponseSubjects["GetFoods"].next(data)
    )*/

    var food1 = new Food()
    food1.courses = ["dinner"]
    food1.cuisines = ["Asian"]
    food1.imageURL="https://media-cdn.tripadvisor.com/media/photo-s/15/b9/52/3e/sushi-maki-mix.jpg"
    food1.ingredients = ["salt","pepper","fish","sea"]
    food1.name = "sushi"
    food1.rating = 4
    food1.recipeURL = "no recipe"
    food1.totalTime = 180
    var foods = [food1]
    this.ResponseSubjects["GetFoods"].next(foods)

  }
}
