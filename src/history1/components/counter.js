import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/counter';
// actionCreator 创建动作的
// 一个项目里 一般会有一个store的文件夹 专门管理redux的
// actions 放actionCreator的
// reducers 放reducer的
// action-types 专门放常量的
// index 创建容器
export default class Counter extends Component {
    constructor() {
        super();
        this.state = { number: store.getState().c.number }
    }
    componentDidMount() {
        this.unsub = store.subscribe(() => {
            this.setState({ number: store.getState().c.number })
        });
    }
    componentWillUnmount() {
        this.unsub();
    }
    render() {
        return <div>
            计数器 {this.state.number}
            <button onClick={() => {
                store.dispatch(actions.add(2))
            }}>+</button>
            <button onClick={() => {
                store.dispatch(actions.minus(1));
            }}>-</button>
        </div>
    }
}