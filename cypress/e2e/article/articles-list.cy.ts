describe('user opens articles page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('and articles are successfully uploaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('using fixtures', () => {
        cy.intercept('GET', '**/articles?*', {
            fixture: 'articles.json',
        });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
