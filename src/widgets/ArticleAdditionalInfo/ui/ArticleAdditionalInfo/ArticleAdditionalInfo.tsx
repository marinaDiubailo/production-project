import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { HStack, VStack, Avatar, Text } from '@/shared/ui';
import { ArticleEditButton } from '@/features/ArticleEditButton';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  canEdit: boolean;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, canEdit, views } = props;
    const { t } = useTranslation('article');

    return (
      <VStack gap="8" className={className}>
        <HStack gap="8">
          <Avatar src={author.avatar} size={32} />{' '}
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        {canEdit && <ArticleEditButton />}
        <Text text={t('{{count}} views', { count: views })} />
      </VStack>
    );
  },
);
