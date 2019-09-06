import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import MyComponent from './src/MyComponent.js'

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//       <MyComponent name="bhargav"/>
//       </div>
//     );
//   }
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOn: true
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <MyComponent name="Bhargav"/>
        </div>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
