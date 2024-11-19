import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, Icon } from '@/shared/ui';
import { getUserAuthData } from '@/entities/User';
import { SideBarItemType } from '../../model/types/sidebar';
import s from './SideBarItem.module.scss';

interface SideBarItemProps {
  item: SideBarItemType;
  collapsed: boolean;
}

const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation('translation');
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      activeClassName={s.active}
      data-collapsed={collapsed}
      className={s.item}
    >
      <Icon Svg={item.Icon} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
});
export default SideBarItem;
