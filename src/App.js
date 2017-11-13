import React, { Component } from 'react';
import styles from './styles.css';

class App extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Hey there,</h1>
        <p>My name is Jonathan Bursztyn,</p>
        <p>I'm a Software Engineer at MuleSoft</p>
        <p>Sometimes I like taking pictures</p>
      </div>
    );
  }
}

export default App;
