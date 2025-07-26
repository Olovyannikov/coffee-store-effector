import { AppShell, Burger, Flex, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// import { CategoryPicker } from '@/features/CategoryPicker';
// import { CoffeeSearchInput } from '@/features/CoffeeSearchInput';
// import { CreateOrderAction } from '@/features/CreateOrderAction';
//
// import { OrderList } from '@/widgets/OrderList';
// import { ProductsList } from '@/widgets/ProductsList';

export default function IndexPage() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 100 }}
            aside={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened } }}
            padding='md'
        >
            <AppShell.Header>
                <Flex align='center' gap='md' h='100%' px='md'>
                    <Group>
                        {/*<CategoryPicker />*/}
                        {/*<CoffeeSearchInput />*/}
                    </Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom='md' size='md' />
                </Flex>
            </AppShell.Header>
            <AppShell.Aside p='md'>
                <Title order={2}>Order:</Title>
                <Stack>
                    {/*<OrderList />*/}
                    {/*<CreateOrderAction />*/}
                </Stack>
            </AppShell.Aside>
            <AppShell.Main>{/*<ProductsList />*/}</AppShell.Main>
        </AppShell>
    );
}
