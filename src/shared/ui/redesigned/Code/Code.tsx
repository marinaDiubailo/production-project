/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '../../../assets/icons/redesigned/copy.svg';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';

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
      <Icon
        className={cls['copy-icon']}
        clickable
        onClick={copyHandler}
        Svg={CopyIcon}
      />
      <code>{text}</code>
    </pre>
  );
});
