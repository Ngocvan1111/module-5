import {Product} from './product';

export interface Consignment {
  id: number;
  code: string;
  product: Product;
  amountProduct: number;
  importDate: string;
  dateOfManufacture: string;
  expirationDate: string;
}
