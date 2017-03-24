import * as React from 'react';
//import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native'
import App from './App';
//import '../assets/index.css';

/*ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);*/

AppRegistry.registerComponent('MyApp', (): React.ComponentClass<any> => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('rnw') })
