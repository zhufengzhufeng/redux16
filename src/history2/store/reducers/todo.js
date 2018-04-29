// todo的reducer
import * as types from '../action-types';
let initState = {todos:['睡觉','吃饭']}
function todo(state=initState,action) {
    // {type:ADD_TODO,todo:'洗澡'}
    switch(action.type){
        case types.ADD_TODO:
            return {todos:[...state.todos,action.todo]}
    }
    return state;
}
export default todo;