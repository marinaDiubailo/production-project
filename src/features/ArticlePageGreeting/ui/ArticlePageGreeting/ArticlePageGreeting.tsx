import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpen } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpen: true }));
        }
    }, [dispatch, isArticlesPageWasOpen]);

    const onClose = () => setIsOpen(false);
    const text = (
        <Text
            title={t('Welcome to the articles page')}
            text={t('Here you can search')}
        />
    );

    return (
        <>
            <BrowserView>
                <Modal lazy isOpen={isOpen} onClose={onClose}>
                    {text}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer lazy isOpen={isOpen} onClose={onClose}>
                    {text}
                </Drawer>
            </MobileView>
        </>
    );
});
