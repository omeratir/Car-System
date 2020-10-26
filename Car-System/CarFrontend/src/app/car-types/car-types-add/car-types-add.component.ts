import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarTypesService } from '../car-types.service';

@Component({
  selector: 'app-car-types-add',
  templateUrl: './car-types-add.component.html',
  styleUrls: ['./car-types-add.component.css']
})
export class CarTypesAddComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(private carTypeService: CarTypesService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    // init form control
    this.form = new FormGroup({
      carType_Name: new FormControl(null, {validators: [Validators.required, Validators.minLength(1)]
      })
    });
  }

  // on click save car type
  onAddCarType() {
    this.carTypeService.addCarTypeByForm(this.form.value).subscribe(
      result => {
        // reset form value and toaste success
        this.form.reset();
        this.toastr.success('Save Car Type Success!' , 'Car Type Add');
      },
      error => { // while an error on save type
        console.log(error);
        this.toastr.success('Error on Save Car Type' , 'Car Type Add');
      }
    );
  }

}
