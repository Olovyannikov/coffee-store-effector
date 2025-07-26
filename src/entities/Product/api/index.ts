import { createMutation, createQuery } from '@farfetched/core';
import { isEmpty, omitBy } from 'lodash-es';

import { API, BASE_URL, createCommonRequestFx } from '@/shared/api';

import type { CoffeeApiRequest, CoffeeApiResponse, OrderCoffeeRequest, OrderCoffeeResponse } from './dto.ts';

export const getCoffeeListQuery = createQuery({
    effect: createCommonRequestFx<CoffeeApiRequest, CoffeeApiResponse[]>((params) => ({
        url: BASE_URL,
        params: omitBy(params, isEmpty),
    })),
    initialData: [],
});

export const orderCoffeeMutation = createMutation({
    effect: createCommonRequestFx<OrderCoffeeRequest, OrderCoffeeResponse>((body) => ({
        url: API.ORDER_URL,
        method: 'POST',
        body,
    })),
});
