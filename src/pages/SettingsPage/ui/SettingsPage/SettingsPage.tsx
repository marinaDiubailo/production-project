import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesigneSwitcher } from '@/features/UiDesigneSwitcher';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');

    return (
        <Page className={classNames('', {}, [className])}>
            <Text title={t('User settings')} />
            <VStack gap="16">
                <UiDesigneSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
