import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Главная страница')}
            <Counter />
            <StarRating />
        </Page>
    );
};

export default MainPage;
