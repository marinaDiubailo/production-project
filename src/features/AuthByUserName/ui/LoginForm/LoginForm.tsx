import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Input
                type='text'
                className={cls['login-input']}
                placeholder={t('username')}
                autofocus
            />
            <Input
                type='text'
                className={cls['login-input']}
                placeholder={t('password')}
            />
            <Button
                className={cls['login-btn']}
                theme={ThemeButton.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
