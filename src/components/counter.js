import React,{Component} from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions/counter';
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
export default connect(state => ({ n: state.counter.number }), dispatch=>({
    add: (count) => dispatch(actions.add(count)),
    minus: (count) => dispatch(actions.minus(count))
}))(Counter);

//export default connect(state => ({ n: state.counter.number }), actions)(Counter);

// export default connect(state => ({ n: state.counter.number }), dispatch=>({
//     add: (count) => dispatch(actions.add(count)),
//     minus: (count) => dispatch(actions.minus(count))
// }))(Counter);
// 这个方法是redux中的方法

// export default connect(state => ({ n: state.counter.number }), dispatch => bindActionCreators(actions,dispatch))(Counter);
// function bindActionCreators(actions, dispatch) {
//     let obj = {};
//     for (let key in actions) {
//         // 给对象增加属性 key是actions中的key，值是函数，函数中的内容就是派发一个动作
//         obj[key] = (...args) => dispatch(actions[key](...args));
//     }
//     return obj;
// }