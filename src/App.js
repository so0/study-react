import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
  //   const style = {
  //     backgroundColor: 'black',
  //     padding: '16px',
  //     color: 'white',
  //     fontSize: '36px'
  //   };
  //   return <div style={style}>안녕하세요!</div>;
    return (
      <div>
        <div className="App">
          리액트
        </div>

        <div>
          {/* 주석 */}
          <h1
          // 태그 사이 주석
          > 리액트~</h1>
        </div>

      </div>
    );
  }
}

export default App;
