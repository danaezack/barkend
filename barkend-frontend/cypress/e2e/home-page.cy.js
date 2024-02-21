describe('User flows for home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/dogs', {
      statusCode: 200,
      fixture: "dogs"
    });
    cy.visit('http://localhost:3000/main');
  });

  it('renders the home page and expected elements', () => {
    cy.get('.page-title').contains('BarkEnd');
    cy.get('.welcome-msg').contains('Welcome, User');
    cy.get('.all-dogs-btn').contains('All Dogs');
    cy.get('.small-btn').contains('Small');
    cy.get('.medium-btn').contains('Medium');
    cy.get('.large-btn').contains('Large');
    cy.get('input[name=breed-search]');
    cy.get('.search-btn').contains('Search');
    cy.get('.dogs-container').should('exist');
    cy.get('.dog-card').should('have.length', 5);
    cy.get('.dog-card').first().find('img').should('have.attr', 'src', 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70734971/1/?bust=1708020281');
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
    cy.get('.dog-card').first().contains('h3', 'Cardigan Welsh Corgi');
    cy.get('.dog-card').first().contains('h4', 'Adult · Small');
    cy.get('.dog-card').last().find('img').should('have.attr', 'src', 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70734964/2/?bust=1708020054');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('.dog-card').last().contains('h3', 'Beagle');
    cy.get('.dog-card').last().contains('h4', 'Young · Medium');
  })

  it('clicks on a dog card, renders corresponding dog details, and navigates back to all dogs', () => {
    cy.get('.dog-card').first().click();
    cy.url().should('eq', 'http://localhost:3000/dog-details/1');
    cy.get('.image-carousel').find('img').first().should('have.attr', 'src', 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70734971/1/?bust=1708020281');
    cy.get('.image-carousel').find('img').last().should('have.attr', 'src', 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/70734971/3/?bust=1708020282');
    cy.get('.swiper-button-next').should('exist');
    cy.get('.swiper-button-prev').should('exist');
    cy.get('.name').contains(`Hi, I'm Whiskey`);
    cy.get('.sub-details').contains('Adult • Male • Cardigan Welsh Corgi');
    cy.get('ul').contains(`Whiskey's Qualities`);
    cy.get('.tags').contains('Friendly, Smart, Playful, Loyal, Affectionate, Funny');
    cy.get('.inquiry').contains('Interested in Whiskey?');
    cy.get('.sub-details').contains('email: Inquire@Apollosupportandrescue.org');
    cy.get('.sub-details').contains('phone: (817) 658-9738');
    cy.get('.x-btn').click();
    cy.url().should('eq', 'http://localhost:3000/main');
  })

  it('searches by partial/full capitalized/non-capitalized dog breed keywords and displays results', () => {
    cy.get('input[name=breed-search]').type('bea');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Twix');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('input[name=breed-search]').type('BEAGLE');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Twix');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('input[name=breed-search]').type('beagle');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Twix');
    cy.get('.dog-card').last().contains('h2', 'Mars');
  })

  it('searches by non-existent dog breed keyword, displays no results, and provides user message', () => {
    cy.get('input[name=breed-search]').type('asdlkgjhasdoighu');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 0);
    cy.get('.no-match-msg').contains('Sorry, there are no dogs that match! Try again.');
  })

  it('filters by one dog size or multiple dog sizes and displays corresponding results', () => {
    cy.get('.small-btn').click();
    cy.get('.dog-card').should('have.length', 1);
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
    cy.get('.large-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
    cy.get('.dog-card').last().contains('h2', 'PONI-TEXAS');
    cy.get('.medium-btn').click();
    cy.get('.dog-card').should('have.length', 5);
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('.medium-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
    cy.get('.dog-card').last().contains('h2', 'PONI-TEXAS');
    cy.get('.large-btn').click();
    cy.get('.dog-card').should('have.length', 1);
    cy.get('.dog-card').first().contains('h2', 'Whiskey');
  })

  it('both searches by dog breed keyword and filters by dog size concurrently and displays combined results (or provides user message if no matching results)', () => {
    cy.get('.medium-btn').click();
    cy.get('.dog-card').should('have.length', 3);
    cy.get('.dog-card').first().contains('h2', 'Twix');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('input[name=breed-search]').type('Beagle');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 2);
    cy.get('.dog-card').first().contains('h2', 'Twix');
    cy.get('.dog-card').last().contains('h2', 'Mars');
    cy.get('input[name=breed-search]').type('Aus');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('have.length', 1);
    cy.get('.dog-card').first().contains('h2', 'Fancy');
    cy.get('input[name=breed-search]').type('asdlkgjhasdoighu');
    cy.get('.search-btn').click();
    cy.get('.dog-card').should('not.exist');
    cy.get('.no-match-msg').contains('Sorry, there are no dogs that match! Try again.');
  })

  it('should notify the user if the API fails to fetch the dog data', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/dogs', {
      statusCode: 500
    });
    cy.get('.error-msg').contains('Failed to retrieve dogs... Please try again later.');
  })
})