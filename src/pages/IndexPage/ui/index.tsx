import { AppShell, Burger, Flex, Grid, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { CategoryPicker } from '@/features/CategoryPicker';
import { CoffeeSearchInput } from '@/features/CoffeeSearch';
import { CreateOrderAction } from '@/features/CreateOrderAction';
import { ResetFiltersAction } from '@/features/ResetFiltersAction';

import { OrderList } from '@/widgets/OrderList';
import { ProductsList } from '@/widgets/ProductsList';
import { RootLayout } from '@/widgets/RootLayout';

export default function IndexPage() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <RootLayout>
            <AppShell
                header={{ height: 100 }}
                aside={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
                padding='md'
            >
                <AppShell.Header>
                    <Flex align='center' gap='md' w='100%' h='100%' px='md'>
                        <Grid w='100%' align='center' columns={12}>
                            <Grid.Col span={4}>
                                <CoffeeSearchInput />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <CategoryPicker />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <ResetFiltersAction />
                            </Grid.Col>
                        </Grid>
                        <Burger opened={opened} onClick={toggle} hiddenFrom='md' size='md' />
                    </Flex>
                </AppShell.Header>
                <AppShell.Aside p='md'>
                    <Title order={2}>Order:</Title>
                    <Stack>
                        <OrderList />
                        <CreateOrderAction />
                    </Stack>
                </AppShell.Aside>
                <AppShell.Main>
                    <ProductsList />
                </AppShell.Main>
            </AppShell>
        </RootLayout>
    );
}
