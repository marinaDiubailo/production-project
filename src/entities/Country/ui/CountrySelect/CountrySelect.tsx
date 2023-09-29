import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Belarus, content: t(Country.Belarus) },
    { value: Country.Kazakhstan, content: t(Country.Kazakhstan) },
    { value: Country.Russia, content: t(Country.Russia) },
    { value: Country.Ukraine, content: t(Country.Ukraine) },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            items={options}
            value={value}
            defaulValue={t('Страна')}
            readonly={readonly}
            direction='top right'
            label={t('Страна')}
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Страна')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
