import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './NavBar.module.scss';

interface NavbarProps {
	className?: string;
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					className={cls['main-link']}
					to={RoutePath.main}
				>
					{t('Главная')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
				>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
