import * as types from '../action-types';
function counter(state={number:0},action) {
    switch (action.type) {
        case types.INCREMENT:
            // reducer必须返回新的状态 才能使视图更新
           return {number:state.number+action.count};
        case types.DECREMENT:
            return {number:state.number-action.count};
    }
    return state;
}
export default counter;