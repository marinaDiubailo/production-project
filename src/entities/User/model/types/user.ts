import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';
import { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: Array<UserRole>;
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  _mounted?: boolean;
}
