import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarTypesAddComponent } from './car-types/car-types-add/car-types-add.component';
import { CarTypesListComponent } from './car-types/car-types-list/car-types-list.component';


const routes: Routes = [
  { path: 'cartype/list', component: CarTypesListComponent },
  { path: 'cartype/add', component: CarTypesAddComponent },
  { path: 'cars', loadChildren: './cars/cars.module#CarsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
