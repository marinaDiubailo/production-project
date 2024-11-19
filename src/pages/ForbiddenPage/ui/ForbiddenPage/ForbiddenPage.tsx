import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <Page
      data-testid="ForbiddenPage"
      className={classNames('', {}, [className])}
    >
      <Text title={t('No access')} align={'center'} />
    </Page>
  );
});

export default ForbiddenPage;
