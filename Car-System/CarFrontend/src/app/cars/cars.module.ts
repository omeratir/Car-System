import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarsRoutingModule } from './car-routing.module';
import { CarInfoComponent } from './car-info/car-info.component';
import { SearchCarTypePipe } from './car-list/search-pipes/search-CarType.pipe';
import { SearchCarNumberPipe } from './car-list/search-pipes/search-CarNumber.pipe';
import { SearchCar4X4Pipe } from './car-list/search-pipes/search-CAR4X4.pipe';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [CarListComponent, CarAddComponent, CarInfoComponent,
    SearchCarNumberPipe, SearchCarTypePipe, SearchCar4X4Pipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    CarsRoutingModule
  ],
  exports: [
    CarListComponent,
    CarInfoComponent
  ]
})
export class CarsModule {}
