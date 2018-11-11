import React, { Component } from 'react';

// 정보를 보여주는 컴포넌트
class PhoneInfo extends Component {
    render() {
        const { name, phone, id } = this.props.info; 

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
            </div>
        );
    }
}

export default PhoneInfo;