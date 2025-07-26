import { Button } from '@mantine/core';
import { useUnit } from 'effector-react';

import { ProductModel } from '@/entities/Product';

export const ResetFiltersAction = () => {
    const [onFiltersResetHandler] = useUnit([ProductModel.resetAllFilters]);

    return <Button onClick={onFiltersResetHandler}>Сбросить фильтры</Button>;
};
