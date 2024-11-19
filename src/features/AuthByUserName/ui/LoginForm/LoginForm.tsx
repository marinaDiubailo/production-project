import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, Input, Text, VStack } from '@/shared/ui';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('login-form');
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

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
      forceUpdate();
    }
  }, [onSuccess, dispatch, username, password, forceUpdate]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack gap="16">
        <Text title={t('Authorization Form')} />
        {error && <Text text={t('Incorrect')} variant="error" />}
        <Input
          type="text"
          className={cls['login-input']}
          placeholder={t('Username')}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls['login-input']}
          placeholder={t('Password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls['login-btn']}
          variant="filled"
          onClick={onConfirm}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </VStack>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
