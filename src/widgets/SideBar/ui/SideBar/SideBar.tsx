import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleHandler = () => {
		setCollapsed((prevState) => !prevState);
	};

	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				data-testid='sidebar-toggle'
				type='button'
				onClick={toggleHandler}
				className={cls.arrow}
			>
				<span className={collapsed ? cls['arrow-right'] : cls['arrow-left']} />
			</Button>
			<div className={cls.items}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={cls.item}
				>
					<HomeIcon className={cls.icon} />
					<span className={cls.link}>{t('Главная')}</span>
				</AppLink>

				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
					className={cls.item}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>{t('О сайте')}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
