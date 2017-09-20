import React, { Component } from 'react';
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
      var randomX = Math.random() | 0;
      const values = {
        'rotation': randomRotation,
        'size': size,
        'translateX': randomX
      }
      objects.push(values)
    }
    this.state = { objects }
  }

  render() {
    return (
      <div className='container'> 
        { this.state.objects.map((val, index) => <Test {...val} key={index} />) }
      </div>
    );
  }
}

class Test extends Component {

  render(){
    const style = {
      animationDuration: this.props.rotation + 'ms',
      width: this.props.size * 3+ '%',
      right: this.props.translateX * 100,
      height: 'auto'
      //transform: `translateX(${this.props.translateX * window.innerWidth}px)`
    }
    return(
      <div className='empanada'>
        <img src='./empanada.png' className='rotate' style={style}/>
      </div>
    )
  }

}

export default App;
{/*<div className='test' style={style}>Test</div>*/}
