import {Employee} from '../employee/employee';
import {Customer} from '../customer/customer';
import {Facility} from '../facility/facility';

export interface Contract {
  id: number;
  employee: Employee;
  customer: Customer;
  facility: Facility;
  dateStart: string;
  dateEnd: string;
  deposit: number;
  totalPay: number;
}
