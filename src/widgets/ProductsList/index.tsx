import { Flex, Text } from '@mantine/core';
import { useUnit } from 'effector-react';

import { PageLoader } from '@/shared/ui';

import { CoffeeCard, getCoffeeListQuery } from '@/entities/Product';

import { AddItemToCartAction } from '@/features/AddItemToCartAction';

export const ProductsList = () => {
    const { data, pending } = useUnit(getCoffeeListQuery);

    if (pending) return <PageLoader />;

    return (
        <Flex wrap='wrap' gap='1rem'>
            {data?.map((coffee) => (
                <CoffeeCard
                    key={coffee.id}
                    {...coffee}
                    actionSlot={
                        <AddItemToCartAction item={{ ...coffee, size: 'L', quantity: 1 }}>
                            {coffee.price}&nbsp;<Text ff='system-ui'>₽</Text>
                        </AddItemToCartAction>
                    }
                />
            ))}
        </Flex>
    );
};
