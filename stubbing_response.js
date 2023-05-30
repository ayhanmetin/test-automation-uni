/// <reference types="cypress" />

describe('Stubbing response', () => {
  it('GET', () => {
    cy.intercept({
        method: 'GET',
        url: '/api/boards'},
        {
        body: []
        }).as('boardList');
    cy.visit('/')
  });

  it('POST', () => {
    cy.intercept({
      method: 'POST',
      url: '/api/boards'},
      {
        forceNetworkError: true
      }).as('createBoard');

    cy.visit('/')

    cy.get('[data-cy=create-board]').click();
    
    cy.get('[data-cy=new-board-input]').type('new board{enter}')

    cy.get('#errorMessage').should('be.visible');
  });

  it.only('GET 2', () => {
    cy.intercept({
      method: 'GET',
      url: '/api/boards'}, 
      (req) => {
        req.reply((res) =>{

          res.body[0].starred = true;
          
          return res;
        })

      }).as('boardList');

    cy.visit('/');
  });
});
