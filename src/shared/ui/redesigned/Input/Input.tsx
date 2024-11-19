import {
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useId,
} from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const generatedId = useId();
  const inputId = otherProps.id ?? generatedId;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls['with-addon-left']]: Boolean(addonLeft),
    [cls['with-addon-right']]: Boolean(addonRight),
  };

  const input = (
    <div
      className={classNames(cls['input-wrapper'], mods, [className, cls[size]])}
    >
      <div className={cls['addon-left']}>{addonLeft}</div>
      <input
        id={inputId}
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
      <div className={cls['addon-right']}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <label htmlFor={inputId} className={cls.root}>
        <span className={cls.label}>{label}</span>
        {input}
      </label>
    );
  }

  return input;
});
