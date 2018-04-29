import * as types from '../action-types';
// todo的动作创建
let actions = {
    addTodo(todo){
        return { type: types.ADD_TODO, todo}
    }
}
export default actions;