import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
	className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleHandler = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button onClick={toggleHandler}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
