import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarTypesService } from 'src/app/car-types/car-types.service';
import { EmployeesService } from 'src/app/employees/employees.service';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  providers: [DatePipe]
})
export class CarAddComponent implements OnInit {

  car: Car;
  isLoading = true;
  form: FormGroup;

  // Values
  valueTrue = true;
  valueFalse = false;

  private mode = 'car-create';
  private carId: number;

  constructor(
    public carService: CarsService,
    public route: ActivatedRoute,
    public employeesService: EmployeesService,
    public carTypesService: CarTypesService,
    private router: Router,
    private datePipe: DatePipe,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.employeesService.refreshEmployeeList();
    this.carTypesService.updateCarTypesList();

    // init form controls
    this.form = new FormGroup({
      car_Number: new FormControl(null, {validators: [Validators.required, Validators.minLength(7), Validators.maxLength(8)]
      }),
      carType_Id: new FormControl(null,  { validators: [Validators.required] }),
      car_4X4: new FormControl(null, { validators: [Validators.required] }),
      car_EngineCapacity: new FormControl(null, { validators: [Validators.required] }),
      car_YearProduction: new FormControl(null,
                { validators: [Validators.required, Validators.min(1700), Validators.max(new Date().getFullYear())]}),
      car_Remarks: new FormControl(null),
      employee_Id: new FormControl(0),
      car_CareDate: new FormControl(null, { validators: [Validators.required]}),
      car_UpdateDate: new FormControl(new Date())
    });

    this.form.value.car_Id = 0;

    // get param if it's edit mode
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('car_Id')) {
        this.mode = 'car-edit';
        this.carId = +paramMap.get('car_Id');
        this.carService.getCar(this.carId).subscribe(carData => {
          this.car = carData as Car;
          // set car values in form
          this.form.setValue({
            car_Number: this.car.car_Number,
            carType_Id: this.car.carType_Id,
            car_4X4: this.car.car_4X4,
            car_EngineCapacity: this.car.car_EngineCapacity,
            car_YearProduction: this.car.car_YearProduction,
            car_Remarks: this.car.car_Remarks,
            employee_Id: this.car.employee_Id,
            car_CareDate: this.datePipe.transform(this.car.car_CareDate , 'yyyy-MM-dd'),
            car_UpdateDate: this.car.car_UpdateDate
        });
          this.isLoading = false;
        });
      } else {
        this.mode = 'car-create';
        this.carId = 0;
        this.isLoading = false;
      }
    });
  }

  resetFormControls() {
    this.form.value.car_UpdateDate = new Date();
    this.form.value.employee_Id = 0;
  }

  onAddCar() {
    if (this.mode === 'car-edit') { // To Update Car
      this.form.addControl('car_Id', new FormControl(0));
      this.form.value.car_Id = this.carId;
      this.form.value.car_UpdateDate = new Date();
      this.carService.updateCar(this.carId, this.form.value).subscribe(
        result => {
          this.toastr.success('Car updated success!' , 'Car Update' );
          this.form.reset();
          this.resetFormControls();
          this.router.navigate(['/cars/list']);
        },
        error => {
          console.log('Error On update car');
          if (this.form.invalid) {
            this.toastr.warning('Please fill all the fields' , 'Form Invalid' );
          } else {
            this.toastr.warning('Car number is already exists' , 'Car Number' );
          }
          this.resetFormControls();
        }
      );
    } else { // To Add Car
      this.carService.addCar(this.form.value).subscribe(
        result => {
          this.toastr.success('Car saved success!' , 'Car Add' );
          this.form.reset();
          this.resetFormControls();
          this.router.navigate(['/cars/list']);
        },
        error => { // On Error
          if (this.form.invalid) {
            this.toastr.warning('Please fill all the fields' , 'Form Invalid' );
          } else {
            this.toastr.warning('Car number is already exists' , 'Car Number' );
          }
          this.resetFormControls();
        }
      );
    }
  }
}
