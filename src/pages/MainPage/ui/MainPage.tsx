import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page/ui/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
            <Counter />
            <StarRating />
        </Page>
    );
};

export default MainPage;
