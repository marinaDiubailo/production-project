import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slices/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    username: 'admin',
    age: 48,
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'Ivan',
    last: 'Ivanov',
    city: 'Moscow',
};

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('should change readonly mode', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );

        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        ).toBeInTheDocument();
        expect(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        ).toBeInTheDocument();
    });
    test(' should be reset when canceling', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'Misha'
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.Lastname'),
            'Krasnov'
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue(
            'Misha'
        );
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue(
            'Krasnov'
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton')
        );

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Ivan');
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue(
            'Ivanov'
        );
    });

    test(' should return error', async () => {
        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph')
        ).toBeInTheDocument();
    });

    test('should send successful put request', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id='1' />, options);

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditButton')
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.Firstname'),
            'Mark'
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveButton')
        );

        expect(mockPutRequest).toHaveBeenCalled();
    });
});
