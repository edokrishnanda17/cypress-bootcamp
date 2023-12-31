export const postNewContactSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    birthdate: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    street1: {
      type: 'string'
    },
    street2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    stateProvince: {
      type: 'string'
    },
    postalCode: {
      type: 'string'
    },
    __v: {
      type: 'number'
    }
  },
  required: ['_id', 'firstName', 'lastName', 'birthdate']
};

export const getContactSchema = {};
