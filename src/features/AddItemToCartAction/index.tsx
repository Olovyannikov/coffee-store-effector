import type { PropsWithChildren } from 'react';
import { Button } from '@mantine/core';
import { useUnit } from 'effector-react';

import { type OrderItem, ProductModel } from '@/entities/Product';

interface AddItemToCartActionProps {
    item: OrderItem;
}

export const AddItemToCartAction = ({ children, item }: PropsWithChildren<AddItemToCartActionProps>) => {
    const [setCoffeeCart] = useUnit([ProductModel.cartItemSettled]);

    return (
        <Button onClick={() => setCoffeeCart(item)} fz='1rem' color='blue' fullWidth mt='md' radius='md'>
            {children}
        </Button>
    );
};
