import {observable, action, computed, toJS} from 'mobx';
import schema from './schema';
import empty from 'json-schema-empty';
import Ajv from 'ajv';

declare module 'json-schema-empty' {
  export type empty = (schema: JsonSchemaOrg.Schema) => {}
}

const ajv = new Ajv({allErrors: true, v5: true, useDefaults: true});

//const formData: {[key: string]: string | number} = observable({name: '', email: '', value: 0, birthday: ''});

class Store {
  @observable data: any //= {name: '', email: '', value: 0, birthday: ''}
  @observable valid: boolean | Ajv.Thenable<boolean>
  @observable errors: Ajv.ErrorObject[] | undefined
  validate: Ajv.ValidateFunction

  @computed get errorsText() {return ajv.errorsText(this.errors)}

  constructor(schema: JsonSchemaOrg.Schema ) {
    this.validate = ajv.compile(schema)
    this.data = empty(schema)
    //this.valid = this.validate(this.data);
    console.log(toJS(this.data))
  }

  @action handleChange= (event: React.FormEvent<HTMLInputElement>) => {
    this.data[event.currentTarget.name] = event.currentTarget.value;
    this.valid = this.validate(this.data);
    this.errors = this.validate.errors
  }
}

const store = new Store(schema)
export default store
