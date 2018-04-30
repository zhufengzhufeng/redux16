import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import high from './high';
class Username extends Component {
    render() {
        return (<div>
            <input type="text" value={this.props.value} onChange={() => { }} />
        </div>)
    }
}
// 高阶组件目的 就是实现 解决代码的复用 将公共的代码抽离出来
export default high('username')(Username)