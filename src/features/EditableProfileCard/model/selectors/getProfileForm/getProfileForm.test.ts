import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return correct form data', () => {
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
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
