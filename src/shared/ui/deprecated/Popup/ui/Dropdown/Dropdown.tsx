/* eslint-disable i18next/no-literal-string */
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from '../../../../../types/ui';
import { classNames } from '../../../../../lib/classNames/classNames';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: Array<DropdownItem>;
    trigger: ReactNode;
    direction?: DropdownDirection;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames('', {}, [className, popupCls.popup])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            type="button"
                            className={classNames(cls['menu-item'], {
                                [popupCls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                key={`dropdown-key${index}`}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
