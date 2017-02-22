import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {itmes:[]};
  }
 componentDidMount(){
   console.debug('componentDidMount method')
  	fetch(`http://jsonplaceholder.typicode.com/posts`)
 		.then(result=>result.json())
    .then(items=> {this.state = items})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

     </div>
    );
  }
  

}

export default App;
