export interface IDiscountStrategy {
  apply(price: number): number;
}
