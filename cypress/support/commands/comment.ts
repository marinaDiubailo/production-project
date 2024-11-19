export const addComment = (comment: string) => {
  cy.getByTestId('AddNewCommentForm.Input').type(comment);
  cy.getByTestId('AddNewCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(comment: string): Chainable<void>;
    }
  }
}
