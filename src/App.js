import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    return (
      <div>
        <div>
          {/* 자바스크립트 값 사용하기 */}
          Hello {name}!
        </div>
        <div>
          Bye
        </div>
        <div>
        {
          // 조건부 렌더링
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
        </div>
        <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
        </div>
        <div>
        {
          // IIFE
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
        {
          // 화살표함수
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
      </div>
    );
  }
}

export default App;
