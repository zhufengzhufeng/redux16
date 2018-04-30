import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import high from './high'
class Password extends Component {
    render() {
        return (<div>
            <input type="text" value={this.props.value} onChange={()=>{}} />
        </div>)
    }
}
export default high('password')(Password)
