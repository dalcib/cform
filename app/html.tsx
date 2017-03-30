import * as React from 'react';
import {observer} from 'mobx-react';
import Store from './store';

const store = new Store()

const HtmlForm = () => (
  <div>
    <h1>HTML Form</h1>
    <label> Name:
      <input type="text" name="name" value={store.data.name} onChange={store.handleChange} />
    </label ><br /><br />
    <label  > E-mail:
      <input type="text" name="email" value={store.data.email} onChange={store.handleChange} />
    </label ><br /><br />
    <label > Value:
      <input type="number" name="value" value={store.data.value} onChange={store.handleChange} />

    </label ><br /><br />
    <label> Birthday:
      <input type="date" name="birthday" value={store.data.birthday} onChange={store.handleChange} />

    </label ><br /><br />
    {JSON.stringify(store.data)} <br /><br />
    {JSON.stringify(store.errors)} <br /><br />
    {store.errorsText} <br />
    {store.valid} <br />
    {console.table(store.errors)} <br />
    {console.table(JSON.stringify(store.errors))}

  </div>
)

export default observer(HtmlForm);

   // {error && error[1].dataPath} {error && error[1].message}
const error = [[
  {
    "keyword": "format",
    "dataPath": ".email",
    "schemaPath": "#/properties/email/format",
    "params": {"format": "email"},
    "message": "should match format \"email\""},
  {
    "keyword": "format",
    "dataPath": ".birthday",
    "schemaPath": "#/properties/birthday/format",
    "params": {"format": "date"},
    "message": "should match format \"date\""
  },
  {
    "keyword": "type",
    "dataPath": ".value",
    "schemaPath": "#/properties/value/type",
    "params": {"type": "number"},
    "message": "should be number"
  }
],
[
  {
   "keyword": "format",
   "dataPath": ".email",
   "schemaPath": "#/properties/email/format",
   "params": {"format": "email"},
   "message": "should match format \"email\"",
   "schema": "email",
   "parentSchema": {"type": "string", "format": "email"},
   "data": "222"
  },
  {
    "keyword": "type",
    "dataPath": ".value",
    "schemaPath": "#/properties/value/type",
    "params": {"type": "number"},
    "message": "should be number",
    "schema": "number",
    "parentSchema": {"type": "number", "minimum": 4},
    "data": "2"
  },
  {
    "keyword": "format",
    "dataPath": ".birthday",
    "schemaPath": "#/properties/birthday/format",
    "params": {"format": "date"},
    "message": "should match format \"date\"",
    "schema": "date",
    "parentSchema": {"type": "string", "format": "date"},
    "data": ""
  }]]
