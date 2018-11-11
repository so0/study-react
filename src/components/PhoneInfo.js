import React, { Component } from 'react';

// 정보를 보여주는 컴포넌트
class PhoneInfo extends Component {
    handelRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    render() {
        const { name, phone } = this.props.info; 

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div><b>{phone}</b></div>
                <buton onClick={this.handelRemove}>삭제</buton>
            </div>
        );
    }
}

export default PhoneInfo;