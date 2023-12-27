export default class ContactAPI {
  constructor() {
    this.baseURL = Cypress.env('chapter-4').baseURL;
  }

  getContactList(token) {
    const options = {
      method: 'GET',
      url: `${this.baseURL}/contacts`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      failOnStatusCode: false
    };
    return cy.request(options);
  }

  postNewContact(token, body) {
    const options = {
      method: 'POST',
      url: `${this.baseURL}/contacts`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: body,
      failOnStatusCode: false
    };

    return cy.request(options);
  }

  putContact(token, body, contactId) {
    const options = {
      method: 'PUT',
      url: `${this.baseURL}/contacts/${contactId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: body,
      failOnStatusCode: false
    };

    return cy.request(options);
  }

  patchContact(token, body, contactId) {
    const options = {
      method: 'PATCH',
      url: `${this.baseURL}/contacts/${contactId}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: body,
      failOnStatusCode: false
    };

    return cy.request(options);
  }
}
