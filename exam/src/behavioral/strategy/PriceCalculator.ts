import { IDiscountStrategy } from './IDiscountStrategy';
import { NoDiscount } from './NoDiscount';

export class PriceCalculator {
  private strategy: IDiscountStrategy = new NoDiscount();

  setStrategy(strategy: IDiscountStrategy) {
    this.strategy = strategy;
  }

  calculate(price: number): number {
    return this.strategy.apply(price);
  }
}
