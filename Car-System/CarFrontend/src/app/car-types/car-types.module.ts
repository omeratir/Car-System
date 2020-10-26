import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarTypesListComponent } from './car-types-list/car-types-list.component';
import { CarTypesAddComponent } from './car-types-add/car-types-add.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [CarTypesListComponent, CarTypesAddComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class CarTypesModule { }
