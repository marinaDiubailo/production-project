import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 48,
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Ivan',
    last: 'Ivanov',
    city: 'Moscow',
};

describe('validateProfileData.test', () => {
    test('success validation', () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', last: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('with no data', () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
