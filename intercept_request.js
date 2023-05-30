/// <reference types="cypress" />

describe('Intercept requests', () => {
it('GET', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  }).as('boardlist');
  
  cy.visit('/')

  cy.wait('@boardlist').its('response.statusCode').should('eq', 200);
  
  cy.get('[data-cy=board-item]')
    .should('have.length', 7)

  });

  it('POST', () => {
    
    cy.intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard');

    cy.visit('/');

    cy.get('[data-cy=create-board]').click()

    cy.get('[data-cy=new-board-input]').type('new board{enter}')

    cy.wait('@createBoard').then( (board) =>{
      expect(board.response.statusCode).to.eq(201);
      expect(board.request.body.name).to.eq('new board');
    })

  });

});