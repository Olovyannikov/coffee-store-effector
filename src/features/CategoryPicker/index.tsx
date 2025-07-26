import { SegmentedControl } from '@mantine/core';
import { useUnit } from 'effector-react';

import { CoffeeType, ProductModel } from '@/entities/Product';

export const CategoryPicker = () => {
    const [type, setType] = useUnit([ProductModel.$type, ProductModel.coffeeTypeSettled]);

    return (
        <SegmentedControl
            value={type ?? ''}
            onChange={(value) => value && setType(CoffeeType[value as CoffeeType])}
            data={Object.keys(CoffeeType).map((key: string) => ({
                label: CoffeeType[key as CoffeeType],
                value: CoffeeType[key as CoffeeType],
            }))}
        />
    );
};
