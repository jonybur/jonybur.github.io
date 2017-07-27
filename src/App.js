import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.css';

class App extends Component {

  constructor(props){
    super(props)
    
    const objects = []
    for (var i = 0; i < 200; i++){
      const randomRotation = 50000 * Math.random()
      objects.push(randomRotation)
    }
    this.state = { objects }
  }

  render() {

    return (
      <div> 
        { this.state.objects.map(rot => <Test rotation={rot}/>) }
      </div>
    );
  }
}

class Test extends Component {

  constructor(props){
    super(props)
    this.state = { rotation: props.rotation }
  }

  render(){

    const style = {
      animationDuration: this.state.rotation + 'ms',
      width: '20px'
    }

    return(
      <div className='test' style={style}>Test</div>
    )
  }

}

export default App;
