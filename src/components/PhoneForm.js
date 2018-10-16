import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: ''
    }
    handelChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input placeholder="이름" value={this.state.name} onChange={this.handelChange}
                />
                <div>{this.state.name}</div>

            </form>
        )
    }
}

export default PhoneForm;