import { useSelector } from 'react-redux';
import HomeIcon from '@/shared/assets/icons/redesigned/home.svg';
import ArticleIcon from '@/shared/assets/icons/redesigned/article.svg';
import AboutIcon from '@/shared/assets/icons/redesigned/info.svg';
import ProfileIcon from '@/shared/assets/icons/redesigned/avatar.svg';
import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { SideBarItemType } from '../types/sidebar';

export const useSideBarItems = () => {
  const userData = useSelector(getUserAuthData);
  const sideBarItemsList: Array<SideBarItemType> = [
    {
      path: getRouteMain(),
      Icon: HomeIcon,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'O сайте',
    },
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      },
    );
  }

  return sideBarItemsList;
};
