import { Component, OnInit } from '@angular/core';
import { CarTypesService } from '../car-types.service';
import { CarType } from '../CarType.model';

@Component({
  selector: 'app-car-types-list',
  templateUrl: './car-types-list.component.html',
  styleUrls: ['./car-types-list.component.css']
})
export class CarTypesListComponent implements OnInit {

  carTypesList: CarType[];

  constructor(public carTypesService: CarTypesService) { }

  ngOnInit(): void {
    // get the types from server
    this.carTypesService.updateCarTypesList();
  }
}
