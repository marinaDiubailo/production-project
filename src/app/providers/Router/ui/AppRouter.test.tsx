import { screen } from '@testing-library/react';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { UserRole } from '@/entities/User';
import AppRouter from './AppRouter';

describe('AppRouter.test', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/not-real',
        });

        const page = await screen.findByTestId('NotFoundPage');

        expect(page).toBeInTheDocument();
    });

    test('Redirect to the home page for an unauthorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument();
    });

    test('Access to the profile page for an authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');

        expect(page).toBeInTheDocument();
    });

    test('Access denied (not approptiate role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        id: '1',
                    },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument();
    });

    test('Access granted (appropriate role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        id: '1',
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');

        expect(page).toBeInTheDocument();
    });
});
