import AuthAPI from '../../api/chapter-4/authAPI';
import ContactAPI from '../../api/chapter-4/contactAPI';
import { faker } from '@faker-js/faker';
import { postNewContactSchema } from '../../schema/chapter-4/contactListSchema';

let contactApi = new ContactAPI();
let authApi = new AuthAPI();
let email = Cypress.env('chapter-4').email;
let password = Cypress.env('chapter-4').password;

describe('contact list api testing', () => {
  beforeEach(() => {
    authApi.cacheToken(email, password);
  });

  it('Get contact list with valid token and should return valid data', () => {
    contactApi.getContactList(localStorage.token).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.empty;
    });
  });

  it('Create new contact with valid token and should return 201', () => {
    const body = {
      firstName: faker.person.firstName(),
      lastName: 'Doe',
      birthdate: '1970-01-01',
      email: 'jdoe@fake.com',
      phone: '8005555555',
      street1: '1 Main St.',
      street2: 'Apartment A',
      city: 'Anytown',
      stateProvince: 'KS',
      postalCode: '12345',
      country: 'USA'
    };
    contactApi.postNewContact(localStorage.token, body).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).jsonSchema(postNewContactSchema);
    });
  });

  it('update firstName with valid token and data should return 200', () => {
    const body = {
      firstName: 'John',
      lastName: 'Doe',
      birthdate: '1970-01-01',
      email: 'jdoe@fake.com',
      phone: '8005555555',
      street1: '1 Main St.',
      street2: 'Apartment A',
      city: 'Anytown',
      stateProvince: 'KS',
      postalCode: '12345',
      country: 'USA'
    };
    contactApi.putContact(localStorage.token, body, '6582c5613169cf00130e6934').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).jsonSchema(postNewContactSchema);
    });
  });

  it('update with patch firstName and lastName should return 200', () => {
    const body = {
      firstName: 'John'
    };
    contactApi.patchContact(localStorage.token, body, '6582c5613169cf00130e6934').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).jsonSchema(postNewContactSchema);
    });
  });

  it('Create new contact with invalid body 500', () => {
    const body = {
      birthdate: '1970-01-01',
      email: 'jdoe@fake.com',
      phone: '8005555555',
      street1: '1 Main St.',
      street2: 'Apartment A',
      city: 'Anytown',
      stateProvince: 'KS',
      postalCode: '12345',
      country: 'USA'
    };
    contactApi.postNewContact(localStorage.token, body).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).not.empty;
    });
  });
});
