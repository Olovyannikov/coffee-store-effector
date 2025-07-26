import { createRequestFx } from './factory';

export const BASE_URL = 'https://purpleschool.ru/coffee-api';
export const API = {
    ORDER_URL: BASE_URL + '/order',
};

export const createCommonRequestFx = createRequestFx({
    baseURL: import.meta.env.VITE_BASE_URL ?? BASE_URL,
});
