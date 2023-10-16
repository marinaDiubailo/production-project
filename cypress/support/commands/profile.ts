export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'Authorization',
        },
        body: {
            id: '4',
            first: 'Test',
            last: 'Test',
            age: 20,
            currency: 'USD',
            country: 'Kazakhstan',
            city: 'Astana',
            username: 'testuser',
            avatar: '',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
