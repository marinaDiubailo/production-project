import { memo, useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppLogo, Icon, VStack } from '@/shared/ui';
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';
import SideBarItem from '../SideBarItem/SideBarItem';
import { useSideBarItems } from '../../model/selectors/getSideBarItems';
import s from './SideBar.module.scss';
import { SidebarSheet } from '../SideBarSheet/SideBarSheet';

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [isOpenSideBarSheet, setIsOpenSideBarSheet] = useState(false);
  const sideBarItemsList = useSideBarItems();

  const toggleHandler = () => {
    setIsOpenSideBarSheet((prevState) => !prevState);
  };

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1240) {
        setIsOpenSideBarSheet(false);
      }
    };

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  const itemsList = useMemo(
    () =>
      sideBarItemsList.map((item) => (
        <SideBarItem item={item} collapsed key={item.path} />
      )),
    [sideBarItemsList],
  );

  return (
    <>
      <aside data-testid="sidebar" className={clsx(s.sidebar, className)}>
        <AppLogo size={50} className={s.logo} />
        <VStack className={s.items} gap="8" role="navigation">
          {itemsList}
        </VStack>
        <Icon
          data-testid="sidebar-toggle"
          type="button"
          onClick={toggleHandler}
          className={s.arrow}
          Svg={ArrowIcon}
          clickable
        />
        <div className={s.switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </aside>
      <SidebarSheet
        open={isOpenSideBarSheet}
        onOpenChange={setIsOpenSideBarSheet}
      />
    </>
  );
});
