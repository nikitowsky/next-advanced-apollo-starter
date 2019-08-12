// @ts-ignore

// Because there is no GRAPHQL connection
it('Open main page, and see "This is error page." message', () => {
  cy.visit('http://localhost:3000');

  cy.get('#__next').should('have.text', 'This is error page.');
});
