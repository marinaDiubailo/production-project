export { userReducer, userActions } from './model/slices/userSlice';
export type { User, UserSchema } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
export {
    getIsAdmin,
    getIsManager,
    getUserRoles,
} from './model/selectors/getUserRole/getUserRole';

export { UserRole } from './model/consts/consts';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';

export {
    useJsonSettings,
    getJsonSettings,
} from './model/selectors/getUserMounted/jsonSettings';
