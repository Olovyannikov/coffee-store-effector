import { Button } from '@mantine/core';
import { useUnit } from 'effector-react';

import { ProductModel } from '@/entities/Product';

export const CreateOrderAction = () => {
    const [cart] = useUnit([ProductModel.$cart]);
    const [orderCoffee] = useUnit([ProductModel.coffeeOrdered]);

    if (cart.length === 0) return null;

    return (
        <Button
            onClick={() =>
                orderCoffee({
                    orderItems: cart,
                    address: 'Address',
                })
            }
        >
            Order
        </Button>
    );
};
