import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'carNumberFilter'
})
export class SearchCarNumberPipe implements PipeTransform {

  transform(value: any, carNumberInput: string): any {
    if (!carNumberInput) {
      return value;
    }
    carNumberInput = carNumberInput.toLowerCase();
    return value.filter((car) => {
      const rVal = (car.car_Number.toLocaleLowerCase().includes(carNumberInput));
      return rVal;
    });

  }
}
