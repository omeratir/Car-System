import { CarType } from '../car-types/CarType.model';
import { Employee } from '../employees/Employee.model';

export class Car {
  car_Id: number;
  car_Number: string;
  carType_Id: number;
  carType: CarType;
  car_4X4: boolean;
  car_EngineCapacity: number;
  car_YearProduction: number;
  car_Remarks: string;
  employee_Id: number;
  employee: Employee;
  car_CareDate: Date;
  car_UpdateDate: Date;
}
