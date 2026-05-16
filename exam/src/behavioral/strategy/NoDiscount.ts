import { IDiscountStrategy } from './IDiscountStrategy';

export class NoDiscount implements IDiscountStrategy {
  apply(price: number): number {
    return price;
  }
}
