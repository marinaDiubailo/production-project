import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LeftArrow from 'shared/assets/icons/left.png';
import RightArrow from 'shared/assets/icons/right.png';
import { Button } from 'shared/ui/Button/Button';
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
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button
				type='button'
				onClick={toggleHandler}
			>
				<img
					src={`${collapsed ? RightArrow : LeftArrow}`}
					// eslint-disable-next-line i18next/no-literal-string
					alt='arrow'
				/>
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
