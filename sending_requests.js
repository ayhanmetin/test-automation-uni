/// <reference types="cypress" />

describe('Board tests', () => {
  // this will run before each test within this describe block
  beforeEach(() => {
    cy.visit('/');
  });

  // this will run after each test within this describe block

  it('POST', () => {
    cy.request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'new board by cy.request()'
      }
    });
  });

  it('DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: '/api/boards/61219488125'
    })
  });
});
