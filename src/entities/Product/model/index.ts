import { notifications } from '@mantine/notifications';
import { createEffect, createEvent, createStore, restore, sample } from 'effector';
import { persist } from 'effector-storage/local';
import { persist as queryPersist } from 'effector-storage/query';
import { debounce, readonly, reset } from 'patronum';

import { atom } from '@/shared/factories';
import { appStarted } from '@/shared/services';

import { getCoffeeListQuery, orderCoffeeMutation } from '../api';
import type { OrderCoffeeRequest, OrderItem } from '../api/dto';
import type { CoffeeType } from '../types';

export const ProductModel = atom(() => {
    const coffeeTypeSettled = createEvent<CoffeeType>();
    const $type = restore(coffeeTypeSettled, null);

    queryPersist({
        store: $type,
        key: 'type',
        pickup: undefined,
    });

    const searchSettled = createEvent<string>();
    const $text = restore(searchSettled, '');

    const debouncedSearchSettled = debounce(searchSettled, 200);

    const cartItemSettled = createEvent<OrderItem>();
    const $cart = createStore<OrderItem[]>([]).reset(orderCoffeeMutation.finished.success);

    persist({
        store: $cart,
        key: 'cart',
        pickup: undefined,
    });

    const resetAllFilters = createEvent();

    reset({
        clock: resetAllFilters,
        target: [$text, $type],
    });

    sample({
        clock: cartItemSettled,
        source: $cart,
        fn: (cart, item) => {
            const element = cart?.find((el) => el.id === item.id);

            if (element) {
                const quantity = element?.quantity && element.quantity > 0 ? element?.quantity : 1;
                element.quantity = quantity + 1;
                return [...cart];
            }
            return [...cart, item];
        },
        target: $cart,
    });

    sample({
        clock: [appStarted, resetAllFilters, coffeeTypeSettled, debouncedSearchSettled],
        source: {
            type: $type,
            text: $text,
        },
        target: getCoffeeListQuery.refresh,
    });

    const coffeeOrdered = createEvent<OrderCoffeeRequest>();

    const notifyFx = createEffect(() => {
        notifications.show({
            title: 'Поздравялем!',
            message: 'Заказ успешно оформлен',
        });
    });

    sample({
        clock: coffeeOrdered,
        target: orderCoffeeMutation.start,
    });

    sample({
        clock: orderCoffeeMutation.finished.success,
        target: [notifyFx],
    });

    return {
        $type: readonly($type),
        $cart: readonly($cart),
        $text: readonly($text),
        searchSettled,
        coffeeTypeSettled,
        cartItemSettled,
        coffeeOrdered,
        resetAllFilters,
    };
});
