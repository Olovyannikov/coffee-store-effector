import { Paper } from '@mantine/core';
import { useUnit } from 'effector-react';

import { ProductModel } from '@/entities/Product';

export const OrderList = () => {
    const [cart] = useUnit([ProductModel.$cart]);

    if (!cart.length) return null;

    return (
        <>
            {cart?.map((item) => (
                <Paper p='xs' shadow='xs' key={item.id}>
                    {item.name} {item.subTitle} : {item.quantity}
                </Paper>
            ))}
        </>
    );
};
