import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onConfirm = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(cls['login-form'], {}, [
                            className,
                        ])}
                    >
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                text={t('Неверный логин или пароль')}
                                variant="error"
                            />
                        )}
                        <Input
                            type="text"
                            className={cls['login-input']}
                            placeholder={t('username')}
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <Input
                            type="text"
                            className={cls['login-input']}
                            placeholder={t('password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <Button
                            className={cls['login-btn']}
                            variant="outline"
                            onClick={onConfirm}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </div>
                }
                off={
                    <div
                        className={classNames(cls['login-form'], {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated title={t('Форма авторизации')} />
                        {error && (
                            <TextDeprecated
                                text={t('Неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            type="text"
                            className={cls['login-input']}
                            placeholder={t('username')}
                            autofocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls['login-input']}
                            placeholder={t('password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls['login-btn']}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onConfirm}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
