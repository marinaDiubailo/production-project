let profileId: string;

describe('user open profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${profileId}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('and profile is successfully loaded', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'Test');
  });

  it('and edit profile', () => {
    const newFirstname = 'newFirstname';
    const newLastname = 'newLastname';

    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
