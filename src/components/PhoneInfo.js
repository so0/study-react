import React, { Component, Fragment } from 'react';

// 정보를 보여주는 컴포넌트
class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handelRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handelToggleEdit = () => {
        // true -> false
            // onUpdate
        
        // false -> true
            // state에 info값 넣어주기

        const { info, onUpdate } = this.props;
        
        if(this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
        else{
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing: !this.state.editing,
        })
        
    }

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { name, phone } = this.props.info; 
        const { editing } = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
             margin: '8px'
        }
        return (
            <div style={style}>
            {
                editing ? (
                    <Fragment>
                       <div>
                           <input 
                                name="name"
                                onChange={this.handelChange}
                                value={this.state.name}/>
                      </div> 
                       <div>
                           <input 
                                name="phone"
                                onChange={this.handelChange}
                                value={this.state.phone}/>
                        </div>    
                    </Fragment>

                ) : (
                    <Fragment>
                        <div><b>{name}</b></div>
                        <div><b>{phone}</b></div>
                    </Fragment>
                )
            }
                <button onClick={this.handelRemove}>삭제</button>
                <button onClick={this.handelToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;