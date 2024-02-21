describe('User flows for error page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/dogs', {
      statusCode: 200,
      fixture: "dogs"
    });
    cy.visit('http://localhost:3000/main');
  });
  
  it('renders the error page and expected elements when user visits a non-existent url', () => {
    cy.visit('http://localhost:3000/potato');
    cy.get('.not-found-msg').contains('Error: Page not found.');
  })
})