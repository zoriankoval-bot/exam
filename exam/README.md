# Тест 11 — Strategy Pattern

Реалізація патерну **Strategy** на TypeScript. Приклад: різні стратегії знижок для магазину.

## Структура

```
src/behavioral/strategy/
├── IDiscountStrategy.ts   ← інтерфейс
├── NoDiscount.ts
├── SeasonalDiscount.ts
├── LoyaltyDiscount.ts
└── PriceCalculator.ts     ← контекст

examples/
└── index.ts
```

## Запуск

```bash
npm install
npm run example
```

## Вивід

```
Без знижки: 1000
Сезонна 20%: 800
Постійний клієнт: 850
```
