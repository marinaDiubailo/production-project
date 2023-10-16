import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popup';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            items={options}
            value={value}
            defaulValue={t('Валюта')}
            readonly={readonly}
            label={t('Валюта')}
            direction="top right"
        />
    );
});
