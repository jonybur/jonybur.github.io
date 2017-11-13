import React, { Component } from 'react';
import styles from './styles.css';

class App extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Hey there,</h1>
          <p>My name is Jonathan Bursztyn,</p>
          <p>I'm a Software Engineer at <a href="https://www.mulesoft.com" target="_blank">MuleSoft</a></p>
          <p>Sometimes I like taking <a href="" target="_blank">pictures</a></p>
        </div>
        <div className="links">
          <a href="" target="_blank">Portfolio</a>
          <a href="https://www.github.com/jonybur" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/jonybur" target="_blank">LinkedIn</a>
        </div>
      </div>
    );
  }
}

export default App;
