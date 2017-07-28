import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.css';

class App extends Component {

  constructor(props){
    super(props)
    
    const objects = []
    const minRotation = 5000
    for (var i = 0; i < 100; i++){
      var randomRotation = 50000 * Math.random()
      randomRotation = randomRotation < minRotation ? minRotation : randomRotation
      var size = Math.random() * 9
      size = size < 6 ? 6 : size
      const values = {
        'rotation': randomRotation,
        'size': size
      }
      objects.push(values)
    }
    this.state = { objects }
  }

  render() {
    return (
      <div> 
        { this.state.objects.map(val => <Test rotation={val.rotation} size={val.size} key={Math.random()} />) }
      </div>
    );
  }
}

class Test extends Component {

  constructor(props){
    super(props)
    this.state = { 
      rotation: props.rotation,
      size: props.size
    }
  }

  render(){

    const style = {
      animationDuration: this.state.rotation + 'ms',
      width: this.state.size + '%',
      height: 'auto'
    }
    return(
      <img src='./empanada.png' className='empanada' style={style}/>
    )
  }

}

export default App;
{/*<div className='test' style={style}>Test</div>*/}
