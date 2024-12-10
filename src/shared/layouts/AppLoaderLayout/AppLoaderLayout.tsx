import { HStack, VStack, Skeleton } from '@/shared/ui';
import { MainLayout } from '../MainLayout';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = () => {
  return (
    <MainLayout
      navbar={
        <HStack className={cls.header}>
          <Skeleton width={40} height={40} border="50%" />
        </HStack>
      }
      header={
        <HStack className={cls.header}>
          <Skeleton width={40} height={40} border="50%" />
        </HStack>
      }
      content={
        <VStack gap="16" style={{ height: '100%' }}>
          <Skeleton width="70%" height={32} border="16px" />
          <Skeleton width="40%" height={20} border="16px" />
          <Skeleton width="50%" height={20} border="16px" />
          <Skeleton width="30%" height={32} border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
        </VStack>
      }
    />
  );
};
