describe('User flows for hero (home) page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  
  it('renders the hero (home) page and expected elements', () => {
    cy.get('.page-title').contains('BarkEnd');
    cy.get('.welcome-msg').contains('Welcome, User');
    cy.get('.all-dogs-btn').contains('All Dogs');
    cy.get('.slogan').contains('Where every dog finds their furever home.');
    cy.get('.get-started-btn').contains('Get Started');
    cy.get('.hero').then($element => {
      const backgroundImage = $element.css('background-image');
      expect(backgroundImage).to.not.equal('none');
    });
  })

  it('navigates to/from the hero page by all navigation options', () => {
    cy.get('.get-started-btn').click();
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.all-dogs-btn').click();
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
    cy.go('forward');
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:3000/');
  })
})