import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarType } from './CarType.model';

const BACKEND_URL = environment.apiUrl + '/cartypes/';

@Injectable({
  providedIn: 'root'
})

export class CarTypesService {
  carTypesList: CarType[];

  constructor(private http: HttpClient) { }

  updateCarTypesList() {
    this.http.get(BACKEND_URL)
    .toPromise()
    .then(result => {
      // get types list from server
      this.carTypesList = result as CarType[];
    }
    );
  }

  addCarTypeByForm(formData: CarType) {
    // save to db by server
    return this.http.post(BACKEND_URL, formData);
  }

  getCarType(id: number) {
    return this.http.get(BACKEND_URL + '/' + id);
  }
}
