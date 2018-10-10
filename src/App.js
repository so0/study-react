import React, { Component } from 'react';
import MyName from './MyName';
class App extends Component {
  render() {
    return (
      <div>
        <MyName name="리액트"></MyName>
        <MyName></MyName>
      </div>
    );
  }
}

export default App;
