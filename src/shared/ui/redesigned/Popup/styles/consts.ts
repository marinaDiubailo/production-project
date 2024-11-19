import { DropdownDirection } from '../../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls['options-bottom-left'],
  'bottom right': cls['options-bottom-right'],
  'top right': cls['options-top-right'],
  'top left': cls['options-top-left'],
};
