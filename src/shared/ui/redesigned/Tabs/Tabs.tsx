import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: Array<TabItem<T>>;
    value: T;
    onTabClick: (value: T) => void;
    direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;

    const clickHandler = useCallback(
        (value: T) => () => {
            onTabClick(value);
        },
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="8"
            align="start"
            className={classNames(cls.tabs, {}, [className])}
        >
            {tabs.map((tab) => {
                const isSelected = tab.value === value;

                return (
                    <Card
                        key={tab.value}
                        className={classNames(
                            '',
                            { [cls.selected]: isSelected },
                            [className],
                        )}
                        variant={isSelected ? 'light' : 'normal'}
                        border="round-12"
                        onClick={clickHandler(tab.value)}
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
