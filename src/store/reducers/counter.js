import * as types from '../action-types';
import {fromJS} from 'immutable';
let initState = fromJS({ number: 0 });
function counter(state = initState, action) {
    switch (action.type) {
        case types.INCREMENT:
            // reducer必须返回新的状态 才能使视图更新
            return state.update('number',(value)=>value+action.count)
        case types.DECREMENT:
            return state.update('number', (value) => value - action.count)
    }
    return state;
}
export default counter;

/*
 {
     username:{
         hobby:[
             {play:ball:[1,2]}
         ]
     },
     a:{a:{a:1}},
     b:2
 }
 // 把它完全的克隆一份  递归性能问题
 // immutablejs  {...username}
 */