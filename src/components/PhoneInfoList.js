import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    
    // if(!data) return null;

    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        
        // info 배열 => PhoneInfo 컴포넌트로 변환
        const list = data.map(
            info => (
                <PhoneInfo
                    onRemove={onRemove} 
                    info={info} 
                    key={info.id} 
                    onUpdate={onUpdate}
                />
            )
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;