import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './ui/select/select.component';
import { FormGroupComponent } from './ui/form-group/form-group.component';
import { FilterDestinationComponent } from './ui/filter-destination/filter-destination.component';
import { FilterFromComponent } from './ui/filter-from/filter-from.component';
import { FilterDateComponent } from './ui/filter-date/filter-date.component';
import { FilterQuantityComponent } from './ui/filter-quantity/filter-quantity.component';
import { TextInputComponent } from './ui/text-input/text-input.component';
import { CheckBoxComponent } from './ui/check-box/check-box.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from './ui/button/button.component';

import { IngredientsChooseComponent } from './ingredients-choose/ingredients-choose.component';
import { CookingGoalsComponent } from './cooking-goals/cooking-goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodResultsComponent } from './food-results/food-results.component';
import { FoodComponent } from './food/food.component';
import { AlertSystemComponent } from './alert-system/alert-system.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectComponent,
    FormGroupComponent,
    FilterDestinationComponent,
    FilterFromComponent,
    FilterDateComponent,
    CheckBoxComponent,
    TextInputComponent,
    IngredientsChooseComponent,
    CookingGoalsComponent,
    FoodResultsComponent,
    FoodComponent,
    AlertSystemComponent,
    FilterQuantityComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
