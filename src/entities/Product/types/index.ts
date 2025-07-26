export const CoffeeType = {
    cappuccino: 'cappuccino',
    latte: 'latte',
    macchiato: 'macchiato',
    americano: 'americano',
} as const;

export type CoffeeType = keyof typeof CoffeeType;
