import React, { Component } from 'react';
import store from '../store';
export default class Todo extends Component {
    constructor() {
        super();
        this.state = {todos:store.getState().todos}
    }
    render() {
        return (<div>
            <input type="text"/>
            <ul>
                {this.state.todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>)
    }
}