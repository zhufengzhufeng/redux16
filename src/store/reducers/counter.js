import * as types from '../action-types';
function counter(state={number:0},action) {
    switch (action.type) {
        case types.INCREMENT:
            // reducer必须返回新的状态 才能使视图更新
           
            return { number: state.number + action.count };
        case types.DECREMENT:
            return {number:state.number-action.count};
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