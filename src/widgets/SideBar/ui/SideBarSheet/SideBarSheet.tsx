import * as Sheet from '@radix-ui/react-dialog';
import { useMemo } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppLogo, Icon, VStack } from '@/shared/ui';
import ArrowIcon from '@/shared/assets/icons/redesigned/arrow-bottom.svg';
import { useSideBarItems } from '../../model/selectors/getSideBarItems';
import SideBarItem from '../SideBarItem/SideBarItem';

import cls from '../SideBar/SideBar.module.scss';
import s from './SideBarSheet.module.scss';

type Props = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};
export const SidebarSheet = ({ onOpenChange, open }: Props) => {
  const sideBarItemsList = useSideBarItems();

  const itemsList = useMemo(
    () =>
      sideBarItemsList.map((item) => (
        <SideBarItem item={item} key={item.path} collapsed={false} />
      )),
    [sideBarItemsList],
  );

  return (
    <Sheet.Root onOpenChange={onOpenChange} open={open}>
      <Sheet.Overlay className={s.overlay} />
      <Sheet.Content className={s.content}>
        <aside data-testid="sidebar">
          <AppLogo size={50} className={cls.logo} />
          <VStack className={s.items} gap="8" role="navigation">
            {itemsList}
          </VStack>

          <div className={s.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
          </div>
        </aside>
        <Sheet.Close>
          <Icon
            data-testid="sidebar-toggle"
            type="button"
            className={s.arrow}
            Svg={ArrowIcon}
          />
        </Sheet.Close>
      </Sheet.Content>
    </Sheet.Root>
  );
};
