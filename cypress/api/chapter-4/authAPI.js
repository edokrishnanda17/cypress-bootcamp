export default class AuthAPI {
  constructor() {
    this.baseURL = Cypress.env('chapter-4').baseURL;
  }

  loginUser(email, password) {
    const options = {
      method: 'POST',
      url: `${this.baseURL}/users/login`,
      body: {
        email: email,
        password: password
      },
      failOnStatusCode: false
    };
    return cy.request(options);
  }

  cacheToken(email, password) {
    // save the token to cy session, can be access by localStorage.token
    cy.session(['loginByAPI', email], () => {
      this.loginUser(email, password).then((response) => {
        //cy.task('log', 'Get new token');
        window.localStorage.setItem('token', response.body.token);
      });
    });
  }
}
