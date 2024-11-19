/* eslint-disable react/jsx-props-no-spreading */
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation('profile');

  const options = useMemo(
    () => [
      { value: Country.Belarus, content: t(Country.Belarus) },
      { value: Country.Kazakhstan, content: t(Country.Kazakhstan) },
      { value: Country.Russia, content: t(Country.Russia) },
      { value: Country.Ukraine, content: t(Country.Ukraine) },
    ],
    [t],
  );

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const listBoxProps = {
    className,
    onChange: onChangeHandler,
    items: options,
    value,
    defaulValue: t('Country'),
    readonly,
    direction: 'top right' as const,
    label: t('Country'),
  };

  return <ListBox {...listBoxProps} />;
});
