import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import contactlist from '../../pom/contactList';

When('User visit contact list app', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
});

When('User input {string} email', (email) => {
  contactlist.emailInputField().type(email);
});

When('User input {string} password', (password) => {
  contactlist.passwordInputField().type(password);
});

When('click submit button', () => {
  contactlist.submitButton().click();
});

Then('verify user should be able to see contact list', () => {
  cy.intercept('https://thinking-tester-contact-list.herokuapp.com/contacts').as('contactListData');
  contactlist.contactListTable().should('be.visible');
});

Then('verify contact list data is correct', () => {
  cy.wait('@contactListData').then((intercept) => {
    console.log(intercept);
    contactlist
      .contactListNameColumn()
      .should('have.text', `${intercept.response.body[0].firstName} ${intercept.response.body[0].lastName}`);
    contactlist.contactListEmailColumn().should('have.text', intercept.response.body[0].email);
  });
});
