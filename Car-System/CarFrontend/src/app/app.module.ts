import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsService } from './cars/cars.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CarsModule } from './cars/cars.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CarTypesModule } from './car-types/car-types.module';
import { EmployeesModule } from './employees/employees.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    CarTypesModule,
    EmployeesModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    NgxMatSelectSearchModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
