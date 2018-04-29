import React,{Component} from 'react';
import {createStore} from '../redux';
let initState = {number:0};
// 创建需要的方法 ation-type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// 创建规则
function reducer(state = initState,action){ //{type:'IN...',count:2}
    switch (action.type) {
        case INCREMENT:
            return { number:state.number + action.count};
        case DECREMENT:
            return { number: state.number - action.count}
    }
    return state;
}
// 创建容器
let store = createStore(reducer);
export default class Counter extends Component{
    constructor(){
        super();
        this.state = { number: store.getState().number}
    }
    componentDidMount(){
        // 组件挂载完成后 希望订阅一个更新状态的方法，只要状态发生变化，就setState更新视图
        this.unsub = store.subscribe(()=>{
            this.setState({ number: store.getState().number })
        });
    }
    componentWillUnmount(){
        // 移除订阅
        this.unsub();
    }
    render(){
        return <div>
            计数器 {this.state.number}
            <button onClick={()=>{
                store.dispatch({type:INCREMENT,count:2})
            }}>+</button>
            <button onClick={()=>{
                store.dispatch({ type: DECREMENT, count: 1 })
            }}>-</button>
        </div>
    }
}