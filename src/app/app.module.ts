import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IngredientsChooseComponent } from './ingredients-choose/ingredients-choose.component';
import { CookingGoalsComponent } from './cooking-goals/cooking-goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodResultsComponent } from './food-results/food-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngredientsChooseComponent,
    CookingGoalsComponent,
    FoodResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
