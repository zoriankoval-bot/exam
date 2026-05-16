import { PriceCalculator } from '../src/behavioral/strategy/PriceCalculator';
import { NoDiscount } from '../src/behavioral/strategy/NoDiscount';
import { SeasonalDiscount } from '../src/behavioral/strategy/SeasonalDiscount';
import { LoyaltyDiscount } from '../src/behavioral/strategy/LoyaltyDiscount';

const calc = new PriceCalculator();
const ціна = 1000;

calc.setStrategy(new NoDiscount());
console.log('Без знижки:', calc.calculate(ціна));

calc.setStrategy(new SeasonalDiscount(20));
console.log('Сезонна 20%:', calc.calculate(ціна));

calc.setStrategy(new LoyaltyDiscount());
console.log('Постійний клієнт:', calc.calculate(ціна));
