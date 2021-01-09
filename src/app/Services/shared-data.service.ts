import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  private cuisineSource = new BehaviorSubject<string>(undefined)
  currentCuisine = this.cuisineSource.asObservable()
  changeCuisine(cuisine: string) {
    this.cuisineSource.next(cuisine)
  }
  private ingredientsSource = new BehaviorSubject<Array<string>>(undefined)
  currentIngredients = this.ingredientsSource.asObservable()
  changeIngredients(ingredients: Array<string>) {
    this.ingredientsSource.next(ingredients)
  }

  private ingredientsDiscardSource = new BehaviorSubject<Array<string>>(undefined)
  currentIngredientsDiscard = this.ingredientsDiscardSource.asObservable()
  changeIngredientsDiscard(ingredients: Array<string>) {
    this.ingredientsDiscardSource.next(ingredients)
  }
  private maxTimeSource = new BehaviorSubject<Number>(undefined)
  currentMaxTime = this.maxTimeSource.asObservable()
  changeMaxTime(maxTime: Number) {
    this.maxTimeSource.next(maxTime)
  }
  private ratingSource = new BehaviorSubject<Number>(undefined)
  currentRating = this.ratingSource.asObservable()
  changeRating(rating: Number) {
    this.ratingSource.next(rating)
  }
  private courseSource = new BehaviorSubject<string>(undefined)
  currentCourse = this.courseSource.asObservable()
  changeCourse(course: string) {
    this.courseSource.next(course)
  }
  private maxIngredientSource = new BehaviorSubject<Number>(undefined)
  currentMaxIngredient = this.maxIngredientSource.asObservable()
  changeMaxIngredient( maxIngredient: Number) {
    this.maxIngredientSource.next( maxIngredient)
  }
}
