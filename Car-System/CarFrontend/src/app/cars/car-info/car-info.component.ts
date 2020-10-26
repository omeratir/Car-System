import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
