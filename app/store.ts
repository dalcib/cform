import {observable, action, computed} from 'mobx';
import {NativeSyntheticEvent} from 'react-native';
import schema from './schema';
import empty from 'empty-schema';
import Ajv from 'ajv';

const ajv = new Ajv({allErrors: true, v5: true, useDefaults: true, verbose: true});

//const formData: {[key: string]: string | number} = observable({name: '', email: '', value: 0, birthday: ''});

class Store {
  @observable data: any = {name: 'xx', email: '', value: 0, birthday: ''}
  @observable valid: boolean | Ajv.Thenable<boolean>
  @observable errors: Ajv.ErrorObject[] | undefined
  validate: Ajv.ValidateFunction

  @computed get errorsText() {return ajv.errorsText(this.errors)}
  @computed get errorsMessages() {
    if (this.errors) {
      this.errors.map(error => {})
    }
    return ajv.errorsText(this.errors)
  }

  constructor(/*schema: JsonSchemaOrg.Schema */) {
    this.validate = ajv.compile(schema)
    this.data = empty(schema)
    //console.log(this.data);    
    this.valid = this.validate(this.data);
    //console.log(toJS(this.data), JSON.stringify(empty(schema)))
  }

  @action handleChange = (event: React.FormEvent<HTMLInputElement> | NativeSyntheticEvent<{value: string, name: string}>) => {
    this.data[event.currentTarget.name] = event.currentTarget.value;
    this.valid = this.validate(this.data);
    this.errors = this.validate.errors
  }

  @action handleChangeRN = (event: {value: string, name: string}) => {
    this.data[event.name] = event.value;
    this.valid = this.validate(this.data);
    this.errors = this.validate.errors
  }
}

//const store = new Store(schema)
export default Store
