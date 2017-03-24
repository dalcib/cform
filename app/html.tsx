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
    {JSON.stringify(store.data)} <br />
    {store.errorsText} <br />
    {store.valid}
  </div>
)

export default observer(HtmlForm);

   // {error && error[1].dataPath} {error && error[1].message}
