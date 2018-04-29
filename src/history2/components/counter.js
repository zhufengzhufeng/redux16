import React, { Component } from 'react';
import actions from '../store/actions/counter';
import {connect} from 'react-redux';
// connect方法是实现redux和组件的连接
class Counter extends Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            计数器 {this.props.n}
            <button onClick={() => {
                this.props.add(2)
            }}>+</button>
            <button onClick={() => {
              this.props.minus(1);
            }}>-</button>
        </div>
    }
}
// connect方法调用后返回的是新组件
// store.getState().c.number
// 将状态 返回值作为属性
let mapStateToProps = (state)=>{ // store.getState()
    return {n:state.c.number}
}
// 将dispatch方法 返回值作为属性
let mapDispatchToProps = (dispatch) =>{ // store.dispatch
    return {
        add(n){dispatch(actions.add(n))},
        minus(n){dispatch(actions.minus(n))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);