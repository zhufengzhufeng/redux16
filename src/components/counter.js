import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/counter'
class Counter extends Component{
    constructor(){
        super();
   }
   render(){
      return (<div>
        计数器 {this.props.n}
        <button onClick={()=>{
            this.props.add(2)
        }}>+</button>
          <button onClick={() => {
              this.props.minus(2)
          }}>-</button>
     </div>)
 }
}
export default connect(state => ({ n: state.counter.number }), actions)(Counter)