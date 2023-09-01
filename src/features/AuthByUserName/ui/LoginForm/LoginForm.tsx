import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginSate';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onConfirm = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls['login-form'], {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    text={t('Неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                type='text'
                className={cls['login-input']}
                placeholder={t('username')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='text'
                className={cls['login-input']}
                placeholder={t('password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls['login-btn']}
                theme={ButtonTheme.OUTLINE}
                onClick={onConfirm}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
