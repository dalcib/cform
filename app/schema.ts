const schema: JsonSchemaOrg.Schema = {
  properties: {
    name: {type: 'string', default: 'asd'},
    email: {type: 'string', format: 'email'},
    value: {type: 'number'},
    birthday: {type: 'string', format: 'date'},
  }
}

export default schema;
