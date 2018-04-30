import * as types from '../action-types';
function counter(state={number:0},action) {
    switch (action.type) {
        case types.INCREMENT:
            return {number:state.number+action.count};
        case types.DECREMENT:
            return {number:state.number-action.count};
    }
    return state;
}
export default counter;