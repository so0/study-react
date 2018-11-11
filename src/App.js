import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
class App extends Component {
  
  state = {
    information: []
  }
  handleCreate = (data) => {
    console.log(data);
    // this.setState({
    //   information: this.state.information.concat(data)
    // })

    // 비구조화 할당
    const { information } = this.state;
    this.setState({
      information: information.concat(data)
    })
  }
  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
