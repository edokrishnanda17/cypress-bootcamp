describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
  });

  it('success login', () => {
    cy.get('#email').type('test@g.com');
    cy.get('#password').type('test123');
    cy.get('#submit').click();
    cy.xpath('//h1').should('be.visible');
  });

  it('failed login with wrong password', () => {
    cy.get('#email').type('test@g.com');
    cy.get('#password').type('s');
    cy.get('#submit').click();
    cy.get('#error').should('have.text', 'Incorrect username or password');

    //time
    //default 4 detik
    cy.xpath('//h1[normalize-space()="Contact List"]', { timeout: 10000 }).should('include.text', 'Contact List');
    cy.xpath('//h1[normalize-space()="Contact List"]', { timeout: 10000 }).should('be.visible');
  });
});
