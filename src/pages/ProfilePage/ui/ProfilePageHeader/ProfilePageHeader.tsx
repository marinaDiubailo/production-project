import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo(
    ({ className }: ProfilePageHeaderProps) => {
        const { t } = useTranslation('profile');
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSaveChanges = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <div
                className={classNames(cls['profile-page-header'], {}, [
                    className,
                ])}
            >
                <Text title={t('Профиль пользователя')} />
                {canEdit && (
                    <div className={cls['btns-wrapper']}>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls['edit-btn']}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={cls['edit-btn']}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls['save-btn']}
                                    onClick={onSaveChanges}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
