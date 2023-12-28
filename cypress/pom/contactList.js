export default class contactlist {
  static emailInputField() {
    return cy.get('#email');
  }
  static passwordInputField() {
    return cy.get('#password');
  }
  static submitButton() {
    return cy.get('#submit');
  }
  static contactListTable() {
    return cy.get('#myTable');
  }
  static contactListNameColumn() {
    return cy.get('.contactTableBodyRow > :nth-child(2)');
  }
  static contactListEmailColumn() {
    return cy.get('.contactTableBodyRow > :nth-child(4)');
  }
  static contactListPhoneColumn() {
    return cy.get('.contactTableBodyRow > :nth-child(5)');
  }
}
