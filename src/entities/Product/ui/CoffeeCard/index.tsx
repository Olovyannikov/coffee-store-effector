import type { ReactNode } from 'react';
import { Badge, Box, Card, Group, Image, Rating, Stack, Text } from '@mantine/core';

interface CoffeeCardProps {
    name: string;
    subTitle: string;
    type: string;
    price: number;
    image: string;
    rating: number;
    actionSlot?: ReactNode;
}

export const CoffeeCard = ({ image, name, subTitle, rating, type, actionSlot }: CoffeeCardProps) => (
    <Card maw={239} w={'100%'} shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section>
            <Image draggable={false} src={image} height={160} alt={name} />
        </Card.Section>

        <Group justify='space-between' mt='md' mb='xs'>
            <Text fw={500}>{name}</Text>
        </Group>

        <Text size='sm' c='dimmed'>
            {subTitle}
        </Text>

        <Stack justify='space-between' mt='md' mb='xs'>
            <Badge>{type}</Badge>
            <Rating value={rating} readOnly fractions={2} />
        </Stack>

        <Box mt='auto'>{actionSlot}</Box>
    </Card>
);
