import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import {
  Avatar,
  Card,
  HStack,
  Input,
  Skeleton,
  Text,
  VStack,
} from '@/shared/ui';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack justify="center" max>
      <Text
        variant="error"
        title={t('An error occured')}
        text={t('Try to reload page')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding="24" max>
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>

          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

  return (
    <Card padding="16" max className={className} border="round-20">
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" max align="start">
          <VStack gap="8" max>
            <Input
              value={data?.first}
              label={t('First name')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.Firstname"
            />
            <Input
              value={data?.last}
              label={t('Last name')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.Lastname"
            />
            <Input
              value={data?.age}
              label={t('Age')}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t('City')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap="16" max justify="start" align="start">
            <Input
              value={data?.username}
              label={t('Username')}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t('Avatar link')}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
