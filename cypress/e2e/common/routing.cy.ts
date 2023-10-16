import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('user is not authorized', () => {
        it('open home page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('open not found page', () => {
            cy.visit('/profileeeee');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('user is authorized', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });

        it('open profile page', () => {
            cy.visit('/profile/4');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('move to articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
