import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'carTypeFilter'
})
export class SearchCarTypePipe implements PipeTransform {

  transform(value: any, carTypeInput: string): any {
    if (!carTypeInput) {
      return value;
    }
    carTypeInput = carTypeInput.toLowerCase();
    return value.filter((car) => {
      const rVal = (car.carType.carType_Name.toLocaleLowerCase().includes(carTypeInput));
      return rVal;
    });

  }
}
