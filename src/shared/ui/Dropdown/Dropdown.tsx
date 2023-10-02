/* eslint-disable i18next/no-literal-string */
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from '../../types/ui';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls['options-bottom-left'],
    'bottom right': cls['options-bottom-right'],
    'top right': cls['options-top-right'],
    'top left': cls['options-top-left'],
};

interface DropdownProps {
    className?: string;
    items: Array<DropdownItem>;
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as='div'
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            type='button'
                            className={classNames(cls['menu-item'], {
                                [cls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
