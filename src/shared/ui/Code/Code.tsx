/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from '../../assets/icons/copy.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const copyHandler = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                className={cls['copy-btn']}
                theme={ButtonTheme.CLEAR}
                onClick={copyHandler}
            >
                <CopyIcon className={cls.icon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
