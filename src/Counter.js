import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
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
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}

export default Counter;