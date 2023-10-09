import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation('translation');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);

            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Your feedback')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card
            className={className}
            max
        >
            <VStack
                align='center'
                gap='8'
            >
                <Text title={starsCount ? t('Thanks for rating') : title} />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    lazy
                >
                    <VStack
                        gap='32'
                        max
                    >
                        {modalContent}
                        <HStack
                            gap='16'
                            max
                            justify='end'
                        >
                            <Button
                                onClick={cancelHandler}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Close')}
                            </Button>
                            <Button onClick={acceptHandler}>{t('Send')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={cancelHandler}
                >
                    <VStack gap='32'>
                        {modalContent}
                        <Button
                            onClick={acceptHandler}
                            size={ButtonSize.L}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
