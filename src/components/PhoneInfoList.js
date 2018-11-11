import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    
    // if(!data) return null;

    static defaultProps = {
        data: []
    }
    
    render() {
        const { data } = this.props;

        
        // info 배열 => PhoneInfo 컴포넌트로 변환
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;