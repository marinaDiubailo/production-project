import { Loader } from '@/shared/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls['page-loader'], {}, [className])}>
      <Loader />
    </div>
  );
};
