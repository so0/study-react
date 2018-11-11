import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
class App extends Component {
  id = 0; // id는 렌더링 대상이 아니기 때문에 state로 넣지 않아도 된다.
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
      // information: information.concat({
      //   ...data, // spread 연산자
      //   id: this.id++
      // });

      // information: information.concat({
      //   name: data.name,
      //   phone: data.phone,
      //   id: this.id++
      // });

      information: information.concat(Object.assign({}, data, {
        id: this.id++
      }))
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
