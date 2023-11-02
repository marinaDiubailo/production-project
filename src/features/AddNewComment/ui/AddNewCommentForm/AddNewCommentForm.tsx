/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice';
import {
    // getAddNewCommentError,
    getAddNewCommentText,
} from '../../model/selectors/getNewCommentSelectors';
import cls from './AddNewCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddNewCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

const AddNewCommentForm = memo(
    ({ className, onSendComment }: AddNewCommentFormProps) => {
        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();
        const text = useSelector(getAddNewCommentText);
        // const error = useSelector(getAddNewCommentError);

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addNewCommentActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [onCommentTextChange, onSendComment, text]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Card padding="24" border="round-40" max>
                            <HStack
                                data-testid="AddNewCommentForm"
                                gap="16"
                                justify="between"
                                max
                                className={classNames('', {}, [className])}
                            >
                                <Input
                                    data-testid="AddNewCommentForm.Input"
                                    placeholder={t('Add new comment')}
                                    value={text}
                                    onChange={onCommentTextChange}
                                    className={cls.input}
                                />
                                <Button
                                    data-testid="AddNewCommentForm.Button"
                                    variant="outline"
                                    onClick={onSendHandler}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        </Card>
                    }
                    off={
                        <HStack
                            data-testid="AddNewCommentForm"
                            justify="between"
                            max
                            className={classNames(cls['comment-form'], {}, [
                                className,
                            ])}
                        >
                            <InputDeprecated
                                data-testid="AddNewCommentForm.Input"
                                placeholder={t('Add new comment')}
                                value={text}
                                onChange={onCommentTextChange}
                                className={cls.input}
                            />
                            <ButtonDeprecated
                                data-testid="AddNewCommentForm.Button"
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSendHandler}
                            >
                                {t('Save')}
                            </ButtonDeprecated>
                        </HStack>
                    }
                />
            </DynamicModuleLoader>
        );
    },
);

export default AddNewCommentForm;
