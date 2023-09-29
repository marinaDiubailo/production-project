import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '../../lib/classNames/classNames';
import CheckIcon from '../../assets/icons/check-mark.svg';
import { DropdownDirection } from '../../types/ui';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import { Icon } from '../Icon/Icon';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls['options-bottom-left'],
    'bottom right': cls['options-bottom-right'],
    'top right': cls['options-top-right'],
    'top left': cls['options-top-left'],
};

interface ListBoxProps {
    className?: string;
    items?: Array<ListBoxItem>;
    value?: string;
    defaulValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaulValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap='4'>
            {label && <span>{`${label}>`}</span>}
            <HListbox
                disabled={readonly}
                as={'div'}
                value={value}
                onChange={onChange}
                className={classNames(cls.listbox, {}, [className])}
            >
                <HListbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaulValue}</Button>
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
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                    {selected && (
                                        <Icon
                                            className={cls.icon}
                                            Svg={CheckIcon}
                                        />
                                    )}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
