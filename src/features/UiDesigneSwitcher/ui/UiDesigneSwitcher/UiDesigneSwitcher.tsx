import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/redesigned/Popup';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesigneSwitcherProps {
    className?: string;
}

export const UiDesigneSwitcher = memo((props: UiDesigneSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    const dispatch = useAppDispatch();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const items = [
        {
            content: t('New'),
            value: 'new',
        },
        {
            content: t('Old'),
            value: 'old',
        },
    ];

    const handleOnChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData?.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack gap="8">
            <Text text={t('Interface')} />
            {isLoading ? (
                <Skeleton width={120} height={30} border={'34px'} />
            ) : (
                <ListBox
                    items={items}
                    onChange={handleOnChange}
                    value={isAppRedesigned ? 'new' : 'old'}
                    className={classNames('', {}, [className])}
                />
            )}
        </HStack>
    );
});
