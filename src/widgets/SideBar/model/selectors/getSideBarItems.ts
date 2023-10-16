import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { SideBarItemType } from '../types/sidebar';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
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
});
