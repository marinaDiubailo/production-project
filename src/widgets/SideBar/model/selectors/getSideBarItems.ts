import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getUserAuthData } from '@/entities/User';
import { SideBarItemType } from '../types/sidebar';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: Array<SideBarItemType> = [
        {
            path: RoutePath.main,
            Icon: HomeIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'O сайте',
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            }
        );
    }

    return sideBarItemsList;
});
