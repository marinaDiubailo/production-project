let currentArticleId: string;

describe('user opens article details page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
            cy.createArticle().then((article) => {
                currentArticleId = article.id;
                cy.visit(`articles/${article.id}`);
            });
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('and article details page is uploaded', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('and article recommendations list is uploaded', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('and sends comment', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddNewCommentForm').scrollIntoView();
        cy.addComment('Comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('and rate the article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });

    it('and rate the article (using fixtures)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
