import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'car4X4Filter'
})
export class SearchCar4X4Pipe implements PipeTransform {

  transform(value: any, car4x4Input: boolean): any {
    if (car4x4Input === undefined) {
      return value;
    }
    return value.filter((car) => {
      const rVal = (car.car_4X4 === car4x4Input);
      return rVal;
    });


  }
}
