import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls['profile-card'], {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('An error occured')}
        text={t('Try to reload page')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls['profile-card'], {}, [cls.loading])}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCurrency,
    onChangeCity,
    onChangeCountry,
    onChangeUsername,
    onChangeAvatar,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls['profile-card'], mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.first}
        placeholder={t('First name')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.Firstname"
      />
      <InputDeprecated
        value={data?.last}
        placeholder={t('Last name')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.Lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('Age')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('City')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t('Username')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Avatar link')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
    </VStack>
  );
});
