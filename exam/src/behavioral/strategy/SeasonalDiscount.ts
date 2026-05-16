import { IDiscountStrategy } from './IDiscountStrategy';

export class SeasonalDiscount implements IDiscountStrategy {
  constructor(private percent: number) {}

  apply(price: number): number {
    return price - (price * this.percent) / 100;
  }
}
