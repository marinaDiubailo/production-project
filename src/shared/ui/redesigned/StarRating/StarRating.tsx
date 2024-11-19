/* eslint-disable react/jsx-props-no-spreading */
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../../redesigned/Icon/Icon';
import StarIcon from '../../../assets/icons/star.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, size = 30, onSelect, selectedStars = 0 } = props;

  const [currentStarsCount, setCurrentStartsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStartsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStartsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStartsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls['star-rating-redesigned'], {}, [className])}>
      {stars.map((star, idx) => {
        const commonProps = {
          className: classNames(
            cls['star-icon'],
            { [cls['is-selected']]: isSelected },
            [currentStarsCount >= star ? cls.hovered : cls.normal],
          ),
          Svg: StarIcon,
          key: star,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(star),
          onClick: onClick(star),
          'data-testid': `StarRating.${star}`,
          'data-selected': currentStarsCount >= star,
        };

        return <Icon clickable={!isSelected} {...commonProps} key={idx} />;
      })}
    </div>
  );
});
