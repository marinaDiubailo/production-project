import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return <div>{t('О сайте страница')}</div>;
};

export default AboutPage;
