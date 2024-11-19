import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Card, HStack, Text } from '@/shared/ui';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slices/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  ({ className }: EditableProfileCardHeaderProps) => {
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
      <Card border="round-20" max padding="24">
        <HStack
          justify="between"
          max
          className={classNames('', {}, [className])}
        >
          <Text title={t('Профиль пользователя')} />
          {canEdit && (
            <>
              {readonly ? (
                <Button
                  variant="outline"
                  onClick={onEdit}
                  data-testid="EditableProfileCardHeader.EditButton"
                >
                  {t('Редактировать')}
                </Button>
              ) : (
                <HStack gap="8">
                  <Button
                    variant="outline"
                    color="error"
                    onClick={onCancelEdit}
                    data-testid="EditableProfileCardHeader.CancelButton"
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    variant="outline"
                    color="success"
                    onClick={onSaveChanges}
                    data-testid="EditableProfileCardHeader.SaveButton"
                  >
                    {t('Сохранить')}
                  </Button>
                </HStack>
              )}
            </>
          )}
        </HStack>
      </Card>
    );
  },
);
