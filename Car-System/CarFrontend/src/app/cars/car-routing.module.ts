import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: 'add', component: CarAddComponent },
  { path: 'list', component: CarListComponent },
  { path: 'edit/:car_Id', component: CarAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
