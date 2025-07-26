import { TextInput } from '@mantine/core';
import { useUnit } from 'effector-react';

import { ProductModel } from '@/entities/Product';

export const CoffeeSearchInput = () => {
    const [text, setText] = useUnit([ProductModel.$text, ProductModel.searchSettled]);

    return (
        <TextInput
            w='100%'
            size='lg'
            variant='filled'
            type='search'
            value={text}
            placeholder='Search'
            onChange={(e) => setText(e.target.value)}
        />
    );
};
