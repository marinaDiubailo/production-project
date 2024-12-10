import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui';

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <Card max border="round-m" className={className} padding="24">
      <ArticleDetails id={id} />
    </Card>
  );
});
