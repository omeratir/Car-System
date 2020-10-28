import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees/employees.service';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  car: Car;
  isInfoClicked = false;
  isLoading = true;
  rowClicked;

  // XLSX

  workSheet: XLSX.WorkSheet;
  workBook: XLSX.WorkBook;
  carsTable;


  // Search Pipes
  car4X4radiovalue;
  car4X4;
  carNumber = '';
  carType = '';

  // Values
  valueYes = 'Y';
  valueNo = 'N';

  // checkedSearch4X4
  isChecked = false;

  @ViewChild('searchcarnumber', {static: false}) searchCarNumberInput: any;
  @ViewChild('searchcartype', {static: false}) searchCarTypeInput: any;
  @ViewChild('searchcar4x4', {static: false}) searchCar4X4Input: any;

  constructor(public carService: CarsService,
              public employeeService: EmployeesService,
              private toastr: ToastrService) {

  }

  ngOnInit() {
    // get car list from server
    this.carService.refeshCarList().then(result =>
      // stop spinner
      this.isLoading = false
    );
  }

  // on click delete car
  onClickDeleteCar(carId: number) {
    if (confirm('Are you sure that you want to delete this car?')) {
      // if confirm => delete
      this.carService.deleteCar(carId).subscribe(
        result => {
          this.toastr.error('Car deleted successfuly' , 'Car Delete' );
          this.carService.refeshCarList();
        },
        error => {
          this.toastr.warning('Error on delete car' , 'Car Delete' );
          console.log(error.getStatusCode());
        }
      );
    }
  }

  // on click export to excel
  exportTableToXLSX() {
    this.carsTable = document.getElementById('cars-table');
    this.workSheet = XLSX.utils.table_to_sheet(this.carsTable);
    this.workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(this.workBook, this.workSheet, 'CarsSheet');
    XLSX.writeFile(this.workBook, 'CarsTable.xlsx');
  }

  // On click row => open car info
    // tslint:disable-next-line: variable-name
  onClickRow(id, _car) {
    if (this.rowClicked === id) {
      this.resetRowColorAndCloseInfo();
    } else {
       this.rowClicked = id;
       this.isInfoClicked = true;
       this.car = _car;
    }
  }

  onClickCloseInfoButton() {
    this.resetRowColorAndCloseInfo();
  }

  resetRowColorAndCloseInfo() {
    this.rowClicked = -1;
    this.isInfoClicked = false;
  }

  onSearchCarNumber() {
    this.resetRowColorAndCloseInfo();
    this.carNumber = this.searchCarNumberInput.nativeElement.value;
  }

  onSearchCarType() {
    this.resetRowColorAndCloseInfo();
    this.carType = this.searchCarTypeInput.nativeElement.value;
  }

  onSearchCar4X4() {
    this.resetRowColorAndCloseInfo();
    this.car4X4 = this.searchCar4X4Input.nativeElement.value;
    console.log(this.car4X4 + ',' + this.car4X4radiovalue);
  }

  onChange() {
    if (this.car4X4radiovalue === 'Y') {
      this.car4X4radiovalue = 'N';
      this.car4X4 = false;
    } else {
      this.car4X4radiovalue = 'Y';
      this.car4X4 = true;
    }
  }
}
