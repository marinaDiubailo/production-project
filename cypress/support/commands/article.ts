import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    userId: '2',
    title: 'Testing Article',
    subtitle: 'Testing Article',
    img: 'https://www.akademus.es/blog/wp-content/uploads/2018/07/java.png',
    views: 1001,
    createdAt: '01.04.2023',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: {
                Authorization: 'Authorization',
            },
            body: article || defaultArticle,
        })
        .then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'Authorization',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
