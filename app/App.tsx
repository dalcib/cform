import * as React from 'react';
import HtmlForm from './html'
import './rnw'
//import './../assets/App.css';

//const logo = "require('./../public/logo.svg')";

class App extends React.Component<null, null> {
  render() {
    return (
      <div  style={style.container}>
        <div style={style.box} >
          <HtmlForm />
        </div>
        <div style={style.box} >
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </div>
        <div style={style.box}>
          fdsdfds
        </div>
      </div>
    );
  }
}

export default App;

const style = {
  container: {
    display: 'flex',
    fontFamily: 'arial'
  },
  box: {
    border: 'solid black 2px',
    padding: '10px',
    margin: '10px',
    //flex: 1,
    width: '50%'
  }
}
