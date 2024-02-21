describe('User flows for home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/dogs', {
      statusCode: 200,
      fixture: 'dogs'
    })
    cy.visit('http://localhost:3000/')
  })
  
  it('renders the home page and expected home page elements', () => {
    cy.get('.page-title').contains('BarkEnd');
    cy.get('.welcome-msg').contains('Welcome, User');
    cy.get('.nav-btn').first().contains('Saved Dogs');
    cy.get('.nav-btn').last().contains('All Dogs');
    cy.get('.size-toggle-btn').contains('Small');
    cy.get('.size-toggle-btn').contains('Medium');
    cy.get('.size-toggle-btn').contains('Large');
    cy.get('input[name=breed-search')
    cy.get('search-btn').contains('Search')

    // cy.get('.dogs-container')
    // cy.get('.dog-card').should('have.length', 6)
  })
})