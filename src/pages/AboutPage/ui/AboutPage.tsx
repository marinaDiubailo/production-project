/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import s from './AboutPage.module.scss';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page data-testid={'AboutPage'} className={s.page}>
      <h1 className={s.header}>Добро пожаловать на нашу платформу!</h1>
      <p>
        Мы создали это пространство, чтобы объединить людей с общими интересами,
        позволяя делиться знаниями и опытом в разных областях. Наша цель —
        создать сообщество, где каждый может найти полезную информацию, задать
        вопросы и получить ответы от экспертов и единомышленников.
      </p>
      <p>
        Мы верим, что обмен идеями и опытом помогает развивать как
        индивидуальные, так и коллективные навыки. Наша платформа предлагает
        пользователям возможность публиковать статьи, комментировать и обсуждать
        актуальные темы, а также участвовать в различных проектах. Мы стремимся
        поддерживать активное и дружелюбное сообщество, где каждый голос имеет
        значение.
      </p>
      <p>
        Наша команда состоит из профессионалов, увлеченных своей работой и
        стремящихся сделать платформу удобной и доступной для всех. Мы постоянно
        работаем над улучшением функциональности и пользовательского опыта,
        чтобы обеспечить максимально комфортное взаимодействие с нашим сервисом.
        Присоединяйтесь к нам, делитесь своими знаниями и становитесь частью
        нашего сообщества!
      </p>
    </Page>
  );
};

export default AboutPage;
