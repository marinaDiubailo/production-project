import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
