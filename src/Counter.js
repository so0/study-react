import React, { Component } from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
  
      </div>
    );
  };

  
class Counter extends Component {
    state = {
        number: 0,
        error: false
    }

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextProps', nextState);
        // 5의 배수일때 리렌더링 X
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        console.log('nextProps', nextProps);
        console.log('nextProps', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    // 에러 처리
    componentDidCatch(error, info) {
        console.log('error', error);
        console.log('info', info);
        this.setState({
            error: true
        })
    }
   
    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
          number: number + 1
        });
      }
    
      handleDecrease = () => {
        this.setState(
          ({ number }) => ({
            number: number - 1
          })
        );
      }

    render() {
        console.log('render');
        if (this.state.error) return (<h1>에러발생!</h1>);
        
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                {/* 에러 발생 */}
                { this.state.number ===4 && <Problematic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}

export default Counter;