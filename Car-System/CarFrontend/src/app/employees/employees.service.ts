import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from './Employee.model';

const BACKEND_URL = environment.apiUrl + '/employees/';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  constructor(private http: HttpClient) { }

  employeesList: Employee[];
  employee: Employee;

  refreshEmployeeList() {
    this.http.get(BACKEND_URL)
    .toPromise()
    .then(result => {
      this.employeesList = result as Employee[];
      }
    );
  }

  getEmployee(employeeId: number) {
      return this.http.get(BACKEND_URL + employeeId);
  }

}
