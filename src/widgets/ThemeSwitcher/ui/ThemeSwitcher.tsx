import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className={classNames(cls['theme-switcher'], {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</button>
	);
};
