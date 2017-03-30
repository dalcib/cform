const schema: JSON.Schema = {
  type: 'object',
  properties: {
    name: {type: 'string', default: 'asd'},
    email: {type: 'string', format: 'email'},
    value: {type: 'number', minimum: 4},
    birthday: {type: 'string', format: 'date'},
  },
  required: ['name', 'email', 'value', 'birthday']
}

export default schema;
