import { createSelector } from '@reduxjs/toolkit';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
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
import { toggleFeatures } from '@/shared/lib/features';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: Array<SideBarItemType> = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => HomeIcon,
                off: () => HomeIconDeprecated,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'O сайте',
        },
    ];

    if (userData) {
        sideBarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sideBarItemsList;
});
