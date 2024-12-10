import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.ru';
export const $api = axios.create({
  baseURL: 'http://localhost:8000',
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
