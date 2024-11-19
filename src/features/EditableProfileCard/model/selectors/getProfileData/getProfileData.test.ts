import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return correct data', () => {
    const data = {
      username: 'admin',
      age: 48,
      country: Country.Russia,
      currency: Currency.RUB,
      first: 'Ivan',
      last: 'Ivanov',
      city: 'Moscow',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
