/// <reference types="cypress" />

//NOTE: to retry assertions, use .should() instead of .then()


describe('CHAPTER 1', () => {
  

beforeEach(() => {

  cy
    .visit('/board/24318519830')
})


it('Chaining commands', () => {
  // Asserts that the tasks-list has exactly 2 task items
  cy.get('[data-cy="tasks-list"]').find('[data-cy="task"]').should('have.length', 2);

  // Finds the first task item and asserts that it contains the text 'task1'
  cy.get('[data-cy="tasks-list"]').find('[data-cy="task"]').first().should('contain', 'task1');
  // Finds the last task item and asserts that it contains the text 'task2'
  cy.get('[data-cy="tasks-list"]').find('[data-cy="task"]').last().should('contain', 'task2');

  cy.get('[data-cy="task"]').eq(0).should('have.text', ' task1');
  cy.get('[data-cy="task"]').eq(1).should('have.text', ' task2');

  cy.contains('task1');
  cy.get('[data-cy="tasks-list"]').eq(0).contains('task1');
});

it.only('Multiple assertions', () => {
  cy.get('[data-cy="task"]').then( (item) => {
    console.log(item);
    expect(item[0].innerText).to.equal('task1')
    expect(item[1].innerText).to.contain('task2')
  })
});


});