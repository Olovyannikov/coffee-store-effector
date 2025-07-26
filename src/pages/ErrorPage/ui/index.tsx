import { Container, Text, Title } from '@mantine/core';

import { RootLayout } from '@/widgets/RootLayout';

import Illustration from './illustration.svg?react';

import s from './ErrorPage.module.css';

export default function ErrorPage() {
    return (
        <RootLayout title='Dogfood | 404 произошла ошибка'>
            <Container className={s.root}>
                <div className={s.inner}>
                    <Illustration className={s.image} />
                    <div className={s.content}>
                        <Title className={s.title}>Здесь ничего нет</Title>
                        <Text c='dimmed' size='lg' ta='center' className={s.description}>
                            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы ошиблись в адресе или
                            страница была перенесена на другой URL.
                        </Text>
                    </div>
                </div>
            </Container>
        </RootLayout>
    );
}
