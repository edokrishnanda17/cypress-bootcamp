/// <reference types="cypress" />
describe('Make Appoinment', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
  });
  let healthCare = 'Medicaid';
  it('make appoinment', () => {
    //login
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    //Make Appoinment
    for (let x = 0; x < 2; x++) {
      cy.get('select[name="facility"]').select('Hongkong CURA Healthcare Center');
      cy.get('[type="checkbox"]').check();
      if (healthCare === 'Medicare') {
        cy.get('#radio_program_medicare').click();
      } else if (healthCare === 'Medicaid') {
        cy.get('#radio_program_medicaid').click();
      } else {
        cy.get('#radio_program_none').click();
      }
      cy.get('#txt_visit_date').click();
      // cy.get('[class*="datepicker-switch"]').contains('November 2023').click();
      cy.contains('16').click();
      cy.get('#txt_comment').type('Test Coba HealhCare');
      cy.get('#btn-book-appointment').click();
      // cy.get('[class*="btn btn-default"]').should('be.visible').click();
      cy.get('#facility').should('have.text', 'Hongkong CURA Healthcare Center');
    }
  });
});
