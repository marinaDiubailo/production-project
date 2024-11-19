import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { mapDirectionClass } from '../../styles/consts';
import { DropdownDirection } from '../../../../../types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Popover = (props: PopoverProps) => {
  const { className, direction = 'bottom right', trigger, children } = props;

  const panelClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as={'div'} className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
