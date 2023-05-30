/// <reference types="cypress" />

describe('Changing the DOM', () => {

it('invoke(show)', () => {
  cy.visit('/');
  cy.get('[data-cy="star"]').invoke('show').click()
  })

it.only("example 2", () => {
  cy.visit('/24318519830');

  cy.get('[data-cy="board-item"]')
  .trigger('mouseover')

  cy.get('[data-cy="star"]')
  .should('be.visible')

  cy.get('[data-cy="board-item"]')
  .trigger('mouseout')

  cy.get('[data-cy=star]')
  .should('not.be.visible')

  })
})