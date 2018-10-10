import React, { Component } from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name : '기본이름1'
//     }
//     render() {
//         return (
//             <div>
//                 안녕하세요 ! 제 이름은 <b>{this.props.name}</b>입니다.
//             </div>
//         )
//     }
// }
// MyName.defaultProps = {
//     name: '기본이름2' // 위의 내용 덮어씀
// };

// 함수형 컴포넌트
// state와 lifecycle이 없다.
const MyName = ({ name }) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.
        </div>
    )
}

export default MyName;