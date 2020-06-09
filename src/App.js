import React, { Component } from 'react';
import './App.css';
import Age from './components/Age';

class App extends Component {

  constructor(){
    super()
    this.state = {
      name: 'Kristine',
      age: 29
    }
  }
  
  birthday = () => {
    this.setState({age: this.state.age + 1})
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm {this.state.name}</h1>
        <Age age={this.state.age} />
        <button onClick={this.birthday}>Birthday</button>
      </div>
    );
  }
}

export default App;
