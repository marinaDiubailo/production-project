import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack';
import SideBarItem from '../SideBarItem/SideBarItem';
import { getSideBarItems } from '../../model/selectors/getSideBarItems';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sideBarItemsList = useSelector(getSideBarItems);

    const toggleHandler = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <SideBarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sideBarItemsList]
    );

    return (
        <aside
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
                theme={ButtonTheme.CLEAR}
            >
                <span
                    className={
                        collapsed ? cls['arrow-right'] : cls['arrow-left']
                    }
                />
            </Button>
            <VStack
                className={cls.items}
                gap='8'
                role='navigation'
            >
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </aside>
    );
});
