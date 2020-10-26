import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from './car.model';
import { HttpClient} from '@angular/common/http';
import { EmployeesService } from '../employees/employees.service';

const BACKEND_URL = environment.apiUrl + '/cars/';

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  carsList: Car[];

  constructor(private http: HttpClient ) { }

  addCar(formData: Car) {
    return this.http.post(BACKEND_URL, formData);
  }

  updateCar(id: number, formData: Car) {
    return this.http.put(BACKEND_URL + id, formData);
  }

  getCar(id: number) {
    return this.http.get(BACKEND_URL + id);
  }

  deleteCar(id: number) {
    return this.http.delete(BACKEND_URL + id);
  }

  refeshCarList() {
    return this.http.get(BACKEND_URL)
    .toPromise()
    .then(result => {
      this.carsList = result as Car[];
      console.log(this.carsList);
      }
    );
  }
}
