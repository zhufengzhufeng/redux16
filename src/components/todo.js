import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/todo';
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {todos:store.getState().t.todos}
    }
    componentDidMount(){
        this.unsub = store.subscribe(()=>{
            this.setState({ todos: store.getState().t.todos })
        })
    }
    componentWillUnmount(){
        this.unsub();
    }
    render() {
        return (<div>
            <input type="text" onKeyDown={(e)=>{
                if(e.keyCode === 13){
                    store.dispatch(actions.addTodo(e.target.value));
                }
            }}/>
            <ul>
                {this.state.todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>)
    }
}