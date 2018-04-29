import React, { Component } from 'react';
import actions from '../store/actions/todo';
import {connect} from 'react-redux';
class Todo extends Component {
    constructor() {
        super();
    }
    render() {
        return (<div>
            <input type="text" onKeyDown={(e)=>{
                if(e.keyCode === 13){
                    this.props.addTodo(e.target.value);
                }
            }}/>
            <ul>
                {this.props.todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>)
    }
}
// 内部自动会处理actions对象 会自动进行派发工作
export default connect((state)=>({
    todos:state.t.todos
}),actions)(Todo);