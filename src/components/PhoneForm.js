import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handelChange = (e) => {
        this.setState({
            // name: e.target.value
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form>
                <input placeholder="이름" name="name" value={this.state.name} onChange={this.handelChange}/>
                <input placeholder="전화번호" name="phone" value={this.state.phone} onChange={this.handelChange} />
                <div>{this.state.name} {this.state.phone}</div>

            </form>
        )
    }
}

export default PhoneForm;