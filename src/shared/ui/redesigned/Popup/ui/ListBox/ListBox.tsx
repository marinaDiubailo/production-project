import { Fragment, useMemo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '../../../../../lib/classNames/classNames';
import { DropdownDirection } from '../../../../../types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon/Icon';
import ArrowIcon from '../../../../../assets/icons/redesigned/arrow-bottom.svg';
import cls from './ListBox.module.scss';
import clsx from 'clsx';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
  className?: string;
  items?: Array<ListBoxItem<T>>;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  triggerClassName?: string;
  label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    triggerClassName,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack gap="4" className={clsx(className)}>
      {label && <label>{`${label}`}</label>}
      <HListbox
        className={clsx(popupCls.popup, cls.listbox)}
        disabled={readonly}
        as={'div'}
        value={value}
        onChange={onChange}
      >
        <HListbox.Button
          as={Button}
          fullWidth
          variant="outline"
          className={clsx(cls.trigger, triggerClassName)}
        >
          {selectedItem?.content ?? defaultValue}
          {<Icon Svg={ArrowIcon} width={20} height={20} className={cls.icon} />}
        </HListbox.Button>
        <HListbox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.option, {
                    [cls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [cls.selected]: selected,
                  })}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
};
