import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation('translation');

    return (
        <Page className={classNames('', {}, [className])}>
            <Text
                title={t('No access')}
                align={TextAlign.CENTER}
            />
        </Page>
    );
});

export default ForbiddenPage;
