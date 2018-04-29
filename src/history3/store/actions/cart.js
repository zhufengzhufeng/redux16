import * as types from '../action-types';
let actions = {
    changeCheck(id){
        return {type:types.CHANGE_CHECK,id}
    },
    removeCart(id){
        return {type:types.REMOVE_CART,id}
    }
}
export default actions;