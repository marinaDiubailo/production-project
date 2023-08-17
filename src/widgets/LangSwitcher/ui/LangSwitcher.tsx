import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleHandler = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames(cls['lang-switcher'], {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggleHandler}
		>
			{t('Язык')}
		</Button>
	);
};
