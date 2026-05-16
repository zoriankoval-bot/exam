import { IDiscountStrategy } from './IDiscountStrategy';

// постійні клієнти завжди отримують 15%
export class LoyaltyDiscount implements IDiscountStrategy {
  apply(price: number): number {
    return price * 0.85;
  }
}
