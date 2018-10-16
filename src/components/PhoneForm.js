import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            // name: e.target.value
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지 (form submit버튼 클릭 시 자동적으로 페이지가 리로딩됨)
        e.preventDefault();

        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="이름"
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}/>
                <input 
                    placeholder="전화번호"
                    name="phone" 
                    value={this.state.phone} 
                    onChange={this.handleChange} />
                {/* <div>{this.state.name} {this.state.phone}</div> */}
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default PhoneForm;