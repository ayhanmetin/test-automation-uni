/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('test #0', () => {
        // Preserve the 'trello_token' cookie when it gets set
        Cypress.Cookies.preserveOnce('trello_token');
  });

  it.only('test #1', () => {
    // Navigate to login page
    cy.get('[data-cy="login-menu"]').click();
    // Enter email
    cy.get('[data-cy="login-email"]').type('test@test.com');
    // Enter password
    cy.get('[data-cy="login-password"]').type('123456');
    // Click login button
    cy.get('[data-cy="login"]').click();

    cy.wait(1000);

    // Check if the 'trello_token' cookie exists after login
    cy.getCookie('trello_token').should('exist');

    cy.wait(1000);

    // Verify the JWT 
    cy.getCookie('trello_token').should((cookie) => {
    expect(cookie.value).to.be.a('string').and.not.be.empty
    });

  });
});
